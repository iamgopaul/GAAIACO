"""Rebuild apps/web/public/GAAIA Logo.png from the silver emblem + wordmark.

The previous GAAIA Logo.png was the dark-globe original. The other derivative
variants (gaaia-emblem-base.png, gaaia-wordmark.png) use a lighter, ghostly
silver style -- which is what the rest of the brand uses. This script
composites those two variants onto a black square canvas with a luminous core
baked into the orb center, producing a master logo that matches.

Only apps/web/public/GAAIA Logo.png is written.
"""

from __future__ import annotations

from pathlib import Path
from PIL import Image, ImageFilter

REPO = Path("/Users/iamgopaul/Desktop/GAAIA Co")
PUBLIC = REPO / "apps/web/public"
TARGET = PUBLIC / "GAAIA Logo.png"
EMBLEM_SRC = PUBLIC / "gaaia-emblem-base.png"
WORDMARK_SRC = PUBLIC / "gaaia-wordmark.png"

CANVAS = 1254
EMBLEM_DIAM = 720      # how big the orb is on the canvas
WORDMARK_WIDTH = 880   # how wide GAAIA wordmark is on the canvas
EMBLEM_CENTER_Y = 460  # vertical center of the orb on the canvas
WORDMARK_CENTER_Y = 970

# Anchor of the luminous core inside the EMBLEM (matches CSS variant "emblem":
# coreLeft 52.7%, coreTop 50.5%, coreWidth 26%).
CORE_LEFT_FRAC = 0.527
CORE_TOP_FRAC = 0.505
CORE_WIDTH_FRAC = 0.26


def radial_alpha(size: int, falloff: float = 1.0) -> Image.Image:
    mask = Image.new("L", (size, size), 0)
    px = mask.load()
    c = (size - 1) / 2.0
    rmax = size / 2.0
    for y in range(size):
        for x in range(size):
            dx = (x - c) / rmax
            dy = (y - c) / rmax
            d = (dx * dx + dy * dy) ** 0.5
            if d >= 1:
                continue
            t = max(0.0, 1.0 - d) ** falloff
            px[x, y] = int(255 * t)
    return mask


def _lerp(a: tuple, b: tuple, t: float) -> tuple:
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(len(a)))


def make_css_core(size: int) -> Image.Image:
    """Match the CSS radial-gradient on `.gaaia-core`:
       0%  white,
       27% #eef0f2,
       50% #c4c9cf,
       69% rgba(168,175,183,0.45),
       85% transparent.
    """
    stops = [
        (0.00, (255, 255, 255, 255)),
        (0.27, (238, 240, 242, 255)),
        (0.50, (196, 201, 207, 255)),
        (0.69, (168, 175, 183, 115)),  # 0.45 alpha
        (0.85, (168, 175, 183, 0)),
        (1.00, (0, 0, 0, 0)),
    ]
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    px = img.load()
    c = (size - 1) / 2.0
    rmax = size / 2.0
    for y in range(size):
        for x in range(size):
            dx = (x - c) / rmax
            dy = (y - c) / rmax
            d = (dx * dx + dy * dy) ** 0.5
            if d >= 1:
                continue
            # Find segment.
            for i in range(len(stops) - 1):
                t0, c0 = stops[i]
                t1, c1 = stops[i + 1]
                if t0 <= d <= t1:
                    t = (d - t0) / max(1e-9, t1 - t0)
                    px[x, y] = _lerp(c0, c1, t)
                    break
    return img


def make_css_halo(core_d: int) -> Image.Image:
    """Match the CSS box-shadow on `.gaaia-core` with --g=1.2:
       inner glow: 0 0 (g*6) rgba(255,255,255,0.3)
       outer halo: 0 0 (g*13) (g*2) rgba(206,210,215,0.15)

       Box-shadow scales with the element's pixel dimensions, but the CSS uses
       absolute px (~6, ~13) regardless of size. On the small on-page emblem
       the halo is faint; on the 1254px canvas (and a 92px core) we scale the
       blur radii proportionally so the bake reads about the same.
    """
    G = 1.2
    # Proportional scale: original CSS targets a ~36px core; scale halo blur up
    # roughly with the core diameter so the halo stays visually consistent.
    scale = core_d / 36.0
    inner_blur = max(2, int(round(G * 6 * scale)))
    outer_blur = max(4, int(round(G * 13 * scale)))
    outer_spread = max(0, int(round(G * 2 * scale)))

    # Canvas big enough for the largest halo (with margin).
    size = core_d + 2 * (outer_blur + outer_spread + 4)
    halo = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    cx = cy = size // 2

    # Outer halo first (silver, low alpha, big blur).
    outer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    od = ImageFilter.GaussianBlur(radius=outer_blur)
    o_draw = Image.new("L", (size, size), 0)
    from PIL import ImageDraw

    d = ImageDraw.Draw(o_draw)
    r = core_d // 2 + outer_spread
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=int(255 * 0.15))
    o_draw = o_draw.filter(od)
    outer = Image.merge("RGBA", (
        Image.new("L", (size, size), 206),
        Image.new("L", (size, size), 210),
        Image.new("L", (size, size), 215),
        o_draw,
    ))
    halo.alpha_composite(outer)

    # Inner glow (white, slightly higher alpha, tighter blur).
    inner = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    i_draw = Image.new("L", (size, size), 0)
    d2 = ImageDraw.Draw(i_draw)
    ri = core_d // 2
    d2.ellipse((cx - ri, cy - ri, cx + ri, cy + ri), fill=int(255 * 0.30))
    i_draw = i_draw.filter(ImageFilter.GaussianBlur(radius=inner_blur))
    inner = Image.merge("RGBA", (
        Image.new("L", (size, size), 255),
        Image.new("L", (size, size), 255),
        Image.new("L", (size, size), 255),
        i_draw,
    ))
    halo.alpha_composite(inner)

    return halo


def main() -> int:
    emblem = Image.open(EMBLEM_SRC).convert("RGBA")
    wordmark = Image.open(WORDMARK_SRC).convert("RGBA")

    # Scale emblem and wordmark to their target sizes on the canvas.
    emblem = emblem.resize((EMBLEM_DIAM, EMBLEM_DIAM), Image.LANCZOS)
    wm_w, wm_h = wordmark.size
    new_wm_h = round(wm_h * (WORDMARK_WIDTH / wm_w))
    wordmark = wordmark.resize((WORDMARK_WIDTH, new_wm_h), Image.LANCZOS)

    # Black canvas to match the original master.
    canvas = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 255))

    # Paste emblem.
    em_x = (CANVAS - EMBLEM_DIAM) // 2
    em_y = EMBLEM_CENTER_Y - EMBLEM_DIAM // 2
    canvas.alpha_composite(emblem, (em_x, em_y))

    # Paint the luminous core into the emblem's center on the canvas.
    core_d = max(8, int(round(EMBLEM_DIAM * CORE_WIDTH_FRAC)))
    cx = em_x + int(round(EMBLEM_DIAM * CORE_LEFT_FRAC))
    cy = em_y + int(round(EMBLEM_DIAM * CORE_TOP_FRAC))

    # Outer halo (matches CSS box-shadow on .gaaia-core).
    halo = make_css_halo(core_d)
    canvas.alpha_composite(
        halo, (cx - halo.size[0] // 2, cy - halo.size[1] // 2)
    )
    # Core itself (matches CSS radial-gradient on .gaaia-core).
    core = make_css_core(core_d)
    canvas.alpha_composite(core, (cx - core_d // 2, cy - core_d // 2))

    # Paste wordmark.
    wm_x = (CANVAS - WORDMARK_WIDTH) // 2
    wm_y = WORDMARK_CENTER_Y - new_wm_h // 2
    canvas.alpha_composite(wordmark, (wm_x, wm_y))

    canvas.convert("RGB").save(TARGET)
    print(f"Wrote {TARGET} ({CANVAS}x{CANVAS}) -- silver style + baked core.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

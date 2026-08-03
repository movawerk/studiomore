#!/usr/bin/env bash
# Downloads customer-owned images from the current studio-more.de WordPress site
# into the local repository (no hotlinking in production).
# Usage: bash scripts/download-images.sh
set -euo pipefail

BASE="https://studio-more.de/wp-content/uploads"
OUT="public/images"

dl() { # dl <remote-path> <local-path>
  local dest="$OUT/$2"
  mkdir -p "$(dirname "$dest")"
  if [ ! -s "$dest" ]; then
    echo "GET $1"
    curl -sfL --max-time 60 "$BASE/$1" -o "$dest" || echo "FAILED: $1"
  fi
}

# ---------------- Haus U5 ----------------
dl "2024/07/Camera-1-scaled.jpg"                        "projects/haus-u5/render-wohnraum.jpg"
dl "2024/07/Camera-2-scaled.jpg"                        "projects/haus-u5/render-sitztreppe.jpg"
dl "2024/08/06.08.2024-Shear-Updated-1612x1612.jpg"     "projects/haus-u5/render-split-level.jpg"
dl "2024/07/option2-1612x1612.jpg"                      "projects/haus-u5/render-fassade.jpg"
dl "2024/08/cT-A-1612x1612.jpg"                         "projects/haus-u5/diagramm-bestand.jpg"
dl "2024/08/CT-B-1612x1612.jpg"                         "projects/haus-u5/diagramm-deckenoeffnung.jpg"
dl "2024/08/cT-D-1612x1612.jpg"                         "projects/haus-u5/diagramm-gartenzugang.jpg"
dl "2024/08/cT-E-1612x1612.jpg"                         "projects/haus-u5/diagramm-fenster.jpg"
dl "2024/09/Ground-Floor-Plan-Bestand-1612x1612.png"    "projects/haus-u5/grundriss-eg-bestand.png"
dl "2024/09/Ground-Floor-Plan-with-Adjustments-1612x1612.png" "projects/haus-u5/grundriss-eg-umbau.png"
dl "2024/09/First-Floor-Bestand-1612x1612.png"          "projects/haus-u5/grundriss-og-bestand.png"
dl "2024/09/First-Floor-with-Adjustments-1612x1612.png" "projects/haus-u5/grundriss-og-umbau.png"
dl "2024/09/Section-Bestand-1612x1612.png"              "projects/haus-u5/schnitt-bestand.png"
dl "2024/09/Section-with-Adjustments-1612x1612.png"     "projects/haus-u5/schnitt-umbau.png"
dl "2024/08/U5-alt-neu-1612x1612.jpg"                   "projects/haus-u5/vorher-nachher-1.jpg"
dl "2024/08/U5-alt-neu2-1612x1612.jpg"                  "projects/haus-u5/vorher-nachher-2.jpg"
dl "2024/08/WhatsApp-Image-2026-03-10-at-1.22.32-PM-scaled.jpeg" "projects/haus-u5/foto-wohnraum.jpg"
dl "2024/08/WhatsApp-Image-2026-03-10-at-1.23.00-PM-scaled.jpeg" "projects/haus-u5/foto-treppe.jpg"
dl "2024/08/WhatsApp-Image-2026-03-10-at-1.23.15-PM-scaled.jpeg" "projects/haus-u5/foto-luftraum.jpg"
dl "2025/03/WhatsApp-Image-2025-03-06-at-21.13.33.jpeg" "projects/haus-u5/baustelle-2025-01.jpg"

# ---------------- Haus K10 ----------------
dl "2025/03/1.jpg"                                      "projects/haus-k10/foto-1.jpg"
dl "2025/03/2.jpg"                                      "projects/haus-k10/foto-2.jpg"
dl "2025/03/3.jpg"                                      "projects/haus-k10/foto-3.jpg"
dl "2025/03/4.jpg"                                      "projects/haus-k10/foto-4.jpg"
dl "2025/03/5.jpg"                                      "projects/haus-k10/foto-5.jpg"
dl "2025/03/6.jpg"                                      "projects/haus-k10/foto-6.jpg"
dl "2025/03/Axo-Without-Border.jpg"                     "projects/haus-k10/axonometrie.jpg"
dl "2025/03/K10-Axo-With-Surroundings.jpg"              "projects/haus-k10/axonometrie-umgebung.jpg"
dl "2025/03/Ground-Floor-Plan-Bestand.png"              "projects/haus-k10/grundriss-eg-bestand.png"
dl "2025/03/Ground-Floor-Plan-with-Adjustments-Colored.png" "projects/haus-k10/grundriss-eg-umbau.png"
dl "2025/03/Section-Bestand.png"                        "projects/haus-k10/schnitt-bestand.png"
dl "2025/03/Section-Colored-with-Adjustments.png"       "projects/haus-k10/schnitt-umbau.png"
dl "2025/03/WhatsApp-Image-2025-03-01-at-18.32.50-scaled.jpeg" "projects/haus-k10/baustelle-1.jpg"
dl "2025/03/WhatsApp-Image-2025-03-01-at-18.32.52-scaled.jpeg" "projects/haus-k10/baustelle-2.jpg"
dl "2025/03/WhatsApp-Image-2025-03-11-at-11.25.07.jpeg" "projects/haus-k10/foto-essbereich.jpg"

# ---------------- Haus B36 ----------------
dl "2024/10/Ulm-render_square-scaled.jpg"               "projects/haus-b36/render-garten.jpg"
dl "2024/09/Dining-Room-with-Illustration-Fixed.png"    "projects/haus-b36/render-essbereich.png"
dl "2024/08/A-1.jpg"                                    "projects/haus-b36/diagramm-bestand.jpg"
dl "2024/08/B-1.jpg"                                    "projects/haus-b36/diagramm-garten.jpg"
dl "2024/08/C-1.jpg"                                    "projects/haus-b36/diagramm-deckenoeffnung.jpg"
dl "2024/08/D-1.jpg"                                    "projects/haus-b36/diagramm-belichtung.jpg"
dl "2024/08/Ulm-Axo-with-Surroundings.jpg"              "projects/haus-b36/axonometrie-umgebung.jpg"
dl "2024/08/UG-Floor-plan.jpg"                          "projects/haus-b36/grundriss-ug-bestand.jpg"
dl "2024/08/UG-with-Adjustments.jpg"                    "projects/haus-b36/grundriss-ug-umbau.jpg"
dl "2024/08/EG-Floor-plan.jpg"                          "projects/haus-b36/grundriss-eg-bestand.jpg"
dl "2024/08/EG-with-Adjustments.jpg"                    "projects/haus-b36/grundriss-eg-umbau.jpg"
dl "2024/08/Section-A-A.jpg"                            "projects/haus-b36/schnitt-bestand.jpg"
dl "2024/08/Section-A-A-with-Adjustments.jpg"           "projects/haus-b36/schnitt-umbau.jpg"

# ---------------- Haus C1 ----------------
dl "2024/07/Basement-Living.jpg"                        "projects/haus-c1/render-wohnbereich.jpg"
dl "2024/07/Basement-Stairs.jpg"                        "projects/haus-c1/render-treppe.jpg"
dl "2024/07/Kitchen-last-update.jpg"                    "projects/haus-c1/render-kueche.jpg"
dl "2024/07/Master-Bedroom-final.jpg"                   "projects/haus-c1/render-schlafzimmer.jpg"
dl "2024/07/Bathroom-shot-1.jpg"                        "projects/haus-c1/render-bad.jpg"
dl "2024/08/exterior-shot-.jpg"                         "projects/haus-c1/render-garten.jpg"
dl "2024/07/Tiles-1.jpg"                                "projects/haus-c1/detail-boden-1.jpg"
dl "2024/07/Tiles-2.jpg"                                "projects/haus-c1/detail-boden-2.jpg"
dl "2024/07/demolished-and-new-walls-axo.jpg"           "projects/haus-c1/axonometrie-eingriffe.jpg"
dl "2024/08/Stairs-Diagram.png"                         "projects/haus-c1/diagramm-treppe.png"

# ---------------- Haus M1 ----------------
dl "2024/09/pool-shot_-scaled.jpg"                      "projects/haus-m1/render-hof-pool.jpg"
dl "2024/09/Bathroom-shot--scaled.jpg"                  "projects/haus-m1/render-bad.jpg"
dl "2024/09/Larger-Axo-scaled.jpg"                      "projects/haus-m1/axonometrie.jpg"
dl "2024/09/Conceptual-diagram-with-trees.png"          "projects/haus-m1/diagramm-hoefe.png"
dl "2024/09/Wind-Diagram.png"                           "projects/haus-m1/diagramm-lueftung.png"
dl "2024/09/Master-Bedroom-Courtyard.png"               "projects/haus-m1/render-schlafhof.png"

# ---------------- Haus M41 ----------------
dl "2024/07/20260618_SMM41_F-2-scaled.jpg"              "projects/haus-m41/render-wohnraum.jpg"
dl "2024/07/20260618_SMM41_F-scaled.jpg"                "projects/haus-m41/render-bad.jpg"
dl "2024/08/Section-Trial-6-white.jpg"                  "projects/haus-m41/schnitt.jpg"
dl "2024/09/1.jpg"                                      "projects/haus-m41/diagramm-1.jpg"
dl "2024/09/2.jpg"                                      "projects/haus-m41/diagramm-2.jpg"

# ---------------- Haus M ----------------
dl "2025/04/Shot-scaled.jpg"                            "projects/haus-m/render-hof.jpg"
dl "2025/04/vorhang-scaled.jpg"                         "projects/haus-m/render-vorhang.jpg"
dl "2025/04/IMG_9095-scaled.jpg"                        "projects/haus-m/modell-1.jpg"
dl "2025/04/IMG_94652-scaled.jpg"                       "projects/haus-m/modell-2.jpg"
dl "2025/04/IMG_9623-scaled.jpeg"                       "projects/haus-m/modell-3.jpg"
dl "2025/04/Pyramids-Context-scaled.png"                "projects/haus-m/kontext.png"
dl "2025/04/Section-scaled.png"                         "projects/haus-m/schnitt.png"
dl "2025/04/floorplan-edit.jpg"                         "projects/haus-m/grundriss.jpg"
dl "2025/04/99a88588-607d-4763-8acd-667d063a9a3b.jpg"   "projects/haus-m/mauerwerk.jpg"

# ---------------- K21 Hotel+ ----------------
dl "2024/07/C1_HR_20260220-scaled.jpg"                  "projects/k21-hotel-plus/render-strassenecke.jpg"
dl "2024/07/C2_HR_20260220-scaled.jpg"                  "projects/k21-hotel-plus/render-hof.jpg"
dl "2026/04/C_Ext_HR_20260429-1.jpg"                    "projects/k21-hotel-plus/render-fassade.jpg"
dl "2024/07/1.jpg"                                      "projects/k21-hotel-plus/diagramm-1.jpg"
dl "2024/07/2.jpg"                                      "projects/k21-hotel-plus/diagramm-2.jpg"
dl "2024/07/3.jpg"                                      "projects/k21-hotel-plus/diagramm-3.jpg"
dl "2024/07/4.jpg"                                      "projects/k21-hotel-plus/diagramm-4.jpg"
dl "2024/07/5.jpg"                                      "projects/k21-hotel-plus/diagramm-5.jpg"
dl "2024/07/6.jpg"                                      "projects/k21-hotel-plus/diagramm-6.jpg"
dl "2024/10/K21-Axo.jpg"                                "projects/k21-hotel-plus/axonometrie.jpg"
dl "2024/10/K21-OG.png"                                 "projects/k21-hotel-plus/grundriss-wohnen.png"
dl "2024/10/K21-OG-Beds.png"                            "projects/k21-hotel-plus/grundriss-schlafdeck.png"
dl "2024/10/K21-DG.png"                                 "projects/k21-hotel-plus/grundriss-dach.png"
dl "2024/10/K21-GYM.png"                                "projects/k21-hotel-plus/grundriss-fitness.png"

# ---------------- Pavillon S ----------------
dl "2025/04/B1-scaled.jpg"                              "projects/pavillon-s/render-1.jpg"
dl "2025/04/D1-scaled.jpg"                              "projects/pavillon-s/render-2.jpg"
dl "2025/04/A-scaled.png"                               "projects/pavillon-s/diagramm-module.png"
dl "2025/04/C-scaled.png"                               "projects/pavillon-s/diagramm-konfiguration.png"
dl "2025/04/WhatsApp-Image-2025-04-06-at-16.49.05-scaled.jpeg" "projects/pavillon-s/visual-1.jpg"
dl "2025/04/WhatsApp-Image-2025-04-06-at-16.50.04-scaled.jpeg" "projects/pavillon-s/visual-2.jpg"

# ---------------- Aktuell / News ----------------
dl "2024/08/IMG_20240801_163945-scaled.jpeg"            "news/pavillon-le-corbusier/suedfassade.jpg"
dl "2024/08/IMG_20240804_170520-scaled.jpeg"            "news/pavillon-le-corbusier/innenraum.jpg"
dl "2024/08/WhatsApp-Image-2024-08-25-at-12.39.11.jpeg" "news/pavillon-le-corbusier/dachterrasse.jpg"
dl "2024/09/IMG_20240827_091449-scaled.jpg"             "news/haus-u5-baustelle-2024-09/rohbau-og.jpg"
dl "2024/09/IMG_20240828_085209-scaled.jpg"             "news/haus-u5-baustelle-2024-09/dachgeschoss.jpg"
dl "2024/09/IMG_20240906_090848_1271677671918453-scaled.jpg" "news/haus-u5-baustelle-2024-09-2/gaeste-wc.jpg"
dl "2024/09/IMG_20240906_090857_1271677783651266-scaled.jpg" "news/haus-u5-baustelle-2024-09-2/kuechenoeffnung.jpg"
dl "2024/09/IMG_20240829_164306-scaled.jpg"             "news/haus-k10-baustelle-2024-09/wanddurchbruch.jpg"
dl "2025/03/WhatsApp-Image-2025-03-06-at-21.03.02-scaled.jpeg" "news/haus-u5-baustelle-2025-01/ausbau.jpg"
dl "2025/03/WhatsApp-Image-2025-03-06-at-21.09.35.jpeg" "news/haus-u5-baustelle-2025-01/treppe.jpg"

echo "done"

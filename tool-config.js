export const tool={
  "id": "E105",
  "slug": "eng-fluid-roche-limit",
  "title": "유체 위성 로슈 한계 계산기",
  "title_en": "Fluid Satellite Roche Limit Calculator",
  "category": "우주·천체",
  "category_en": "Space and astronomy",
  "fields": [
    {
      "key": "radius",
      "label": "주천체 반지름 R",
      "label_en": "Primary body radius R",
      "dimension": "length",
      "example": 6371000,
      "constraint": "positive",
      "display_unit": "km",
      "display_value": "6371"
    },
    {
      "key": "primarydensity",
      "label": "주천체 평균 밀도 ρ_M",
      "label_en": "Primary mean density ρ_M",
      "dimension": "density",
      "example": 5514,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "5514"
    },
    {
      "key": "satellitedensity",
      "label": "유체 위성 평균 밀도 ρ_m",
      "label_en": "Fluid satellite mean density ρ_m",
      "dimension": "density",
      "example": 3344,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "3344"
    }
  ],
  "result_label": "중심부터 유체 로슈 한계 d_R",
  "result_label_en": "Fluid Roche limit from center d_R",
  "result_dimension": "length",
  "formula": "d_R = 2.44 R (ρ_M/ρ_m)^(1/3)",
  "purpose": "인장강도가 없는 유체 위성의 고전적 조석 파괴 한계 중심거리를 추정한다.",
  "purpose_en": "Estimate the classical tidal disruption distance for a fluid satellite without tensile strength.",
  "assumptions": "R,ρ_M,ρ_m>0. 작은 질량의 동기회전 비압축성 유체 위성이 원궤도를 도는 고전적 근사다. 계수 2.44를 고정 사용한다. 주천체는 구대칭이며 결과는 고도가 아닌 중심거리다. 평균밀도와 반지름에서 M=(4π/3)ρ_M R³로 추정하여 r_s(M)/R≤0.01로 제한한다. 강체·암석 강도·자유 회전·이심 궤도·상대론을 제외한다. 한계가 주천체 표면 안쪽이면 유효한 외부 궤도 한계 없음으로 표시한다.",
  "assumptions_en": "Required: positive inputs, a low-mass synchronously rotating incompressible fluid satellite on a circular orbit and a spherical primary. The coefficient is fixed at 2.44. Output is center distance, not altitude. The app infers M=(4π/3)ρ_M R³ and restricts r_s(M)/R≤0.01. Excluded: rigid-body strength, rock cohesion, nonsynchronous rotation, eccentric orbits and relativity. A limit inside the primary surface is reported as no external orbital limit.",
  "sources": [
    {
      "label": "University of Texas · Roche radius",
      "url": "https://farside.ph.utexas.edu/teaching/celestial/Celestialhtml/node55.html"
    }
  ],
  "condition": "작은 질량·동기회전·비압축성·인장강도 없는 유체 위성과 원궤도 조건을 확인했습니다.",
  "condition_en": "I confirm a low-mass synchronous incompressible fluid satellite without tensile strength on a circular orbit.",
  "output_unit": "km",
  "site": "https://nanalab.kr/eng-fluid-roche-limit/",
  "repository": "https://github.com/NaNaCompany/eng-fluid-roche-limit",
  "groups": []
};

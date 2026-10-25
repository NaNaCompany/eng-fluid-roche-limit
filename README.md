# 유체 위성 로슈 한계 계산기

인장강도가 없는 유체 위성의 고전적 조석 파괴 한계 중심거리를 추정한다.

- ID: E105
- App: https://nanalab.kr/eng-fluid-roche-limit/
- Repository: https://github.com/NaNaCompany/eng-fluid-roche-limit
- Formula: d_R = 2.44 R (ρ_M/ρ_m)^(1/3)

## Model and data

R,ρ_M,ρ_m>0. 작은 질량의 동기회전 비압축성 유체 위성이 원궤도를 도는 고전적 근사다. 계수 2.44를 고정 사용한다. 주천체는 구대칭이며 결과는 고도가 아닌 중심거리다. 평균밀도와 반지름에서 M=(4π/3)ρ_M R³로 추정하여 r_s(M)/R≤0.01로 제한한다. 강체·암석 강도·자유 회전·이심 궤도·상대론을 제외한다. 한계가 주천체 표면 안쪽이면 유효한 외부 궤도 한계 없음으로 표시한다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.

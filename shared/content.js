/* Move as you are. — 웹 쇼잉 공통 콘텐츠 (세 시안 A·B·C가 같은 내용을 쓴다)
   불러오기: <script src="../shared/content.js"></script>  → window.CONTENT
   file:// 에서도 동작하도록 모듈·fetch 없이 전역 변수 하나만 만든다.

   읽는 법
   - 디스플레이 카피는 { type: 'display', ko, en } 객체다. 화면에서는 .ko / .en 만 쓴다.
     문구는 01_brief/COPY_BANK.md 의 ★ 항목에서 글자 하나 바꾸지 않고 옮겼다. status 가 '○' 이면 대안, '△' 이면 운영 미확정.
   - 캠페인 타이틀 락업은 LOCKUP 하나를 공유한다(온점 포함이 고유명사 표기, 디스플레이 온점의 유일한 예외).
   - 그 밖의 문자열은 본문(설명문)이다. 본문은 일반 문장 부호와 숫자를 쓴다.
   - 사실·주장에는 tag 가 붙는다: 공식 | 해석 | 제안 | 가정 (정의는 sources.legend).
   - 이미지 경로는 site/ 기준이다. concept-a/ 등 하위 폴더 페이지에서는 앞에 '../' 를 붙인다(CONTENT.assetBase 참고).
   - 검사: shared/check-content.js → shared/content-check.txt */
(function () {
  'use strict';

  function D(ko, en, status, note) {
    var o = { type: 'display' };
    if (ko) o.ko = ko;
    if (en) o.en = en;
    o.status = status || '★';
    if (note) o.note = note;
    return o;
  }
  var LOCKUP = { type: 'display', lockup: true, en: 'Move as you are.', status: '★' };

  var AI = 'AI 생성 이미지(Midjourney) · 수업용 비공식 제안';
  function PH(name, alt) {
    return {
      src: 'assets/img/photo/' + name + '.webp',
      srcSmall: 'assets/img/photo/' + name + '-960.webp',
      alt: alt,
      ai: true,
      credit: AI
    };
  }
  function F(path, alt, ai) {
    return { src: path, alt: alt, ai: ai !== false, credit: ai === false ? '' : AI };
  }

  /* 사진 (AI 생성 · 보정본) */
  var P = {
    ownPace: PH('ALL_S02-own-pace', '같은 스튜디오에서 세 사람이 서로 다른 상태로 움직인다. 한 사람은 앉아 숨을 고르고, 한 사람은 낮은 런지, 한 사람은 선 자세'),
    arrive: PH('C01_SEOYUN_S01-arrive', '무릎을 꿇고 검은 매트를 펴는 서윤. 매트의 긴 변이 화면을 가로지른다'),
    rest: PH('C02_AMARA_S03-rest', '아기 자세로 눈을 감고 쉬는 아마라'),
    again: PH('C03_RAVI_S04-again', '무릎을 꿇었다가 다시 일어나는 라비, 옅은 미소'),
    waistband: PH('C01_SEOYUN_S05a-waistband', '허리밴드를 정리하는 손'),
    feet: PH('C01_SEOYUN_S05b-feet', '매트 끝에 올라서는 맨발. 매트의 가장자리가 문턱처럼 보인다'),
    subway: PH('C01_SEOYUN_S06-meet-subway', '퇴근길 지하철 계단을 매트를 들고 오르는 서윤'),
    walkIn: PH('C02_AMARA_S07-walk-in', '물병을 들고 스튜디오로 천천히 걸어 들어오는 아마라'),
    sideStretch: PH('C03_RAVI_S08-side-stretch', '앉아서 옆구리를 늘이는 라비'),
    returnMat: PH('C03_RAVI_S09-return-mat', '매트 앞에 다시 선 라비')
  };

  window.CONTENT = {
    version: '2026-10-24',
    assetBase: { root: '', concept: '../' },
    lockup: LOCKUP,

    /* ─────────────────────────────── meta */
    meta: {
      course: '경험디자인B',
      assessment: '직무수행능력평가 1',
      courseLine: '경험디자인B · 직무수행능력평가 1',
      project: 'lululemon 「Move as you are.」 브랜드 캠페인 웹 쇼잉',
      student: { name: '고해은', id: '22561005' },
      professor: '조선영 교수',
      date: '2026-10-24',
      dateLabel: '2026년 10월 24일',
      disclaimer: {
        short: '수업용 비공식 캠페인 제안 · AI 생성 이미지',
        long: '이 페이지는 경험디자인B 수업 과제로 만든 비공식 캠페인 제안입니다. 룰루레몬(lululemon athletica)의 공식 캠페인이 아니며, 룰루레몬과 협의하거나 승인받지 않았습니다. 인물·장면 사진은 모두 Midjourney로 생성하고 보정한 AI 이미지이며, 실제 모델이나 앰배서더가 아닙니다. 의상은 실제 제품을 참고했지만 생성 결과가 제품을 정확히 재현했다고 주장하지 않습니다.',
        en: 'Unofficial class proposal, not a lululemon campaign. All people and scenes are AI-generated (Midjourney).',
        imageCredit: AI
      },
      logo: {
        src: 'assets/logo/lululemon.svg',
        note: '공식 로고 원본(shop.lululemon.com 헤더 SVG, viewBox 170×24, fill=currentColor). 형태·비율·색 변형 금지, 다시 그리지 않는다. 주변 여백은 심볼 높이 이상.',
        alt: 'lululemon'
      }
    },

    /* 섹션 내비게이션 라벨 (REQUIREMENTS 섹션 id 순서) */
    nav: [
      { id: 'hero', label: D('처음', 'Opening') },
      { id: 'why-lululemon', label: D('브랜드 선정', 'Why lululemon') },
      { id: 'brand-analysis', label: D('브랜드 분석', 'Brand analysis') },
      { id: 'background', label: D('배경', 'Background') },
      { id: 'problem', label: D('문제', 'Problem') },
      { id: 'target', label: D('타깃', 'Target') },
      { id: 'insight', label: D('인사이트', 'Insight') },
      { id: 'interview', label: D('기획자 자문자답', 'Project interview') },
      { id: 'bis', label: D('캠페인 언어 자산', 'Campaign identity') },
      { id: 'concept', label: D('콘셉트', 'Concept') },
      { id: 'flow', label: D('경험 흐름', 'Experience flow') },
      { id: 'media', label: D('매체 전략', 'Media') },
      { id: 'visual-assets', label: D('시각 자산', 'Visual assets') },
      { id: 'posters', label: D('포스터', 'Posters') },
      { id: 'ad-mockup', label: D('광고 목업', 'Out of home') },
      { id: 'stories', label: D('스토리 영상', 'Stories') },
      { id: 'social', label: D('소셜', 'Social') },
      { id: 'iphone', label: D('예약 화면', 'Booking screen') },
      { id: 'checklist', label: D('체크리스트', 'Checklist') },
      { id: 'closing', label: D('마무리', 'Closing') },
      { id: 'sources', label: D('출처', 'Sources') }
    ],

    /* ─────────────────────────────── hero */
    hero: {
      id: 'hero',
      lockup: LOCKUP,
      lineKo: D('지금의 나로, 나의 속도로', null, '★', '10-19 계승, 온점 제거'),
      lineKoAlt: D('오늘의 몸으로 시작해요', null, '○'),
      sub: D('준비를 끝내고 오지 않아도 되는 요가', 'Yoga that starts where you are'),
      image: P.arrive,
      imageWide: P.ownPace,
      body: '준비를 끝내고 오라고 하지 않는다. 지금 상태로 움직이는 것이 시작이다. 이 캠페인은 카피로 설득하지 않고, 커뮤니티 클래스에 붙은 조건을 운영에서 지운다.',
      notice: '수업용 비공식 캠페인 제안 · AI 생성 이미지'
    },

    /* ─────────────────────────────── P1 브랜드 선정 이유 */
    whyLululemon: {
      id: 'why-lululemon',
      headline: D('레깅스보다 먼저, 스튜디오가 있었다', 'Before the leggings, there was a studio'),
      headlineAlt: D('이미 가진 문을 여는 캠페인', 'A door the brand already has', '○'),
      sub: D('땀 흘리고, 성장하고, 관계를 맺는 브랜드', 'Sweat, grow and connect', '★', '공식 언어 인용'),
      candidates: '1주차 후보 lululemon · salomon · hoka 가운데 lululemon을 골랐다(과제2, 09-28).',
      reasons: [
        { title: '바꿀 인식이 뚜렷하다', text: '한국에서 룰루레몬은 "비싼 레깅스"라는 한 줄로 알려져 있다.', tag: '해석' },
        { title: '새로 만들지 않고 쓸 자산이 있다', text: '매주 열리는 커뮤니티 클래스, 앰배서더, 청담 매장 3층 요가 스튜디오가 이미 있다. 세부 운영 방식은 10-18 관찰 기록이다.', tag: '공식', note: '운영 세부는 관찰(가정)' },
        { title: '말할 명분이 브랜드 언어 안에 있다', text: '미션의 단어 sweat · grow · connect, 한국 사이트의 "땀 흘리고 성장하며 관계를 맺는"이라는 표현이 캠페인의 근거가 된다.', tag: '공식' },
        { title: '브랜드가 가진 고유 데이터가 있다', text: '룰루레몬 Global Wellbeing Report(2024)는 한국 응답자의 외로움·번아웃 지표를 따로 보고한다. 한국 웰비잉 지수는 15개국 중 13위, 응답자 84%가 외로움이 번아웃에 영향을 준다고 답했다.', tag: '공식' }
      ]
    },

    /* ─────────────────────────────── P2·P3 브랜드 분석 */
    brandAnalysis: {
      id: 'brand-analysis',
      intro: '룰루레몬이 지금 가진 언어 자산과 시각 자산을 공식 자료와 웹 실측으로 정리했다. 사실(공식)과 기획자의 해석을 칸을 나눠 적는다.',
      language: {
        title: '언어 자산 — BIS 6항목',
        items: [
          {
            key: 'name', label: 'Name',
            facts: [
              { text: 'lululemon athletica. 1998년 캐나다 밴쿠버에서 시작했다. 워드마크는 항상 소문자 lululemon.', tag: '공식', src: 'lululemon corporate · 덱 p09' }
            ]
          },
          {
            key: 'vision', label: 'Vision',
            facts: [
              { text: 'Purpose 신판(2026.09): "Elevate human potential by helping people feel their best."', tag: '공식', src: 'lululemon corporate · Our Purpose, Mission & Values' },
              { text: 'Purpose 한국 사이트: "개인의 무한한 잠재력을 깨워 세상을 더 나은 곳으로 변화시킵니다." 영문 신판과 문안이 다르다(구판의 국문화로 보인다).', tag: '공식', src: 'lululemon.co.kr 브랜드 스토리' },
              { text: '구 비전 "Be the experiential brand that ignites a community of people living #thesweatlife through sweat, grow and connect." 는 FY2022 10-K에서 빠졌지만, 한국 사이트에는 "땀 흘리고 성장하며 관계를 맺는 #스웻라이프의 경험을 통해 커뮤니티에 영감을 줍니다"로 남아 있다.', tag: '공식', src: 'SEC 10-K · lululemon.co.kr' },
              { text: '본사는 지웠고 한국은 남겼다. 한국 사이트에는 아직 커뮤니티라는 말이 살아 있다.', tag: '해석' }
            ]
          },
          {
            key: 'mission', label: 'Mission',
            facts: [
              { text: '"Inspire the world to sweat, grow, and connect." (2026.09)', tag: '공식', src: 'lululemon corporate · Our Purpose, Mission & Values' },
              { text: '한국에 전해진 것은 sweat(제품)뿐이고 connect(관계)는 연상에 거의 없다.', tag: '해석' }
            ]
          },
          {
            key: 'essence', label: 'Essence',
            facts: [
              { text: '공식 자료에서 Essence라는 이름의 정의를 찾지 못했다.', tag: '공식', src: '덱 p09 조사 범위' },
              { text: '공식 문장들이 공통으로 가리키는 것은 #thesweatlife, 곧 땀 흘리고 성장하고 관계를 맺는 일상이다.', tag: '해석' }
            ]
          },
          {
            key: 'slogan', label: 'Slogan',
            facts: [
              { text: '상시 슬로건이 없다. 캠페인 단위로 운용한다 — This Is Yoga(2017) · Together we grow(2024) · made to feel(2026) · Space to feel(현재).', tag: '공식', src: '덱 p09' },
              { text: '한국에서는 2025년 7월 「한계를 뛰어넘는 움직임(Stretch Your Limits)」을 썼다.', tag: '공식', src: 'FACTS G' },
              { text: '자사 자산(sweatlife) 대신 경쟁사가 선점한 성취·돌파 어휘를 쓰고 있다.', tag: '해석' }
            ]
          },
          {
            key: 'core-values', label: 'Core Values',
            facts: [
              { text: 'Personal Responsibility · Fun · Courage · Inclusion · Connection, 공식 5개.', tag: '공식', src: 'lululemon corporate · 10-K' },
              { text: '과제2에서 적은 "핵심가치 7개"는 창업기 유산으로, 이번에 정정했다.', tag: '공식', src: '덱 p09' }
            ]
          }
        ]
      },
      visual: {
        title: '현재 시각 자산 — 8항목',
        note: '「사실」은 공식 자료나 공식 웹사이트에서 직접 관찰한 내용이다(관찰한 페이지 범위에 한정하며 전사 규정으로 단정하지 않는다). 「해석」은 기획자의 판단이다. 레퍼런스 이미지는 이 웹에 싣지 않는다.',
        items: [
          {
            key: 'logo', label: 'Logo',
            facts: [
              { text: '원 안의 심볼(내부 명칭 yogo, yoga + logo)과 소문자 워드마크 lululemon의 결합. 심볼 단독이 2차 로고, 결합형이 1차 로고다.', tag: '공식', src: 'FACTS B · 덱 p11' },
              { text: '헤더 SVG 비율은 약 7.08:1, 색은 currentColor. 예전 파일(#140F0F 고정)과 겹쳐 보면 형태가 같다.', tag: '공식', src: 'shop.lululemon.com 헤더 SVG, 2026-10-24 비교' },
              { text: '가이드라인은 원 안의 오메가라고 적고, 과거 연혁은 채택되지 않은 사명 Athletically Hip의 ‘A’라고 적는다.', tag: '공식', src: '덱 p11' }
            ],
            interpretation: [
              { text: '두 해석이 공존할 만큼 형태가 단순하다. 캠페인은 이 마크를 건드리지 않고 놓이는 자리만 바꾼다.', tag: '해석' }
            ]
          },
          {
            key: 'typography', label: 'Typography',
            facts: [
              { text: 'Saans(Displaay)로 교체 중이며 레거시 Calibre(Klim)와 공존한다. 헤드라인도 Bold가 아니라 Light(380)를 쓰고, 문장형(sentence case)이다.', tag: '공식', src: 'lululemon.com CSS 관찰 · FACTS B' },
              { text: '인용문 토큰에만 세리프 KH Giga를 쓴다.', tag: '공식', src: 'lululemon.com 디자인 토큰 관찰' },
              { text: '룰루레몬 코리아는 한글 디스플레이 서체를 지정하지 않은 것으로 보인다. 한글 제목은 시스템 고딕 Bold로 폴백된다.', tag: '가정', src: '폰트 스택 관찰(기획자 실측, 검증 전)' }
            ],
            interpretation: [
              { text: '얇은 Light 문장형이 프리미엄 인상의 핵심 장치다. 한글에서는 그 인상이 끊긴다.', tag: '해석' }
            ]
          },
          {
            key: 'color', label: 'Color',
            facts: [
              { text: 'off-black #140F0F · off-white #FDFDF8 · Signature Red #C8102E(Pantone 186 C). 디지털에서는 순흑·순백을 쓰지 않는다.', tag: '공식', src: '웹 토큰 실측 · FACTS B' },
              { text: '홈페이지 전체 색 집계에서 적색은 3회, off-black은 3,184회 나타났다. 적색 토큰 이름은 border-accent · interactive-priority.', tag: '공식', src: '10-18 실측' },
              { text: '캠페인 팔레트: Campaign Lime #F5FF8E(Together we grow 2024), Report Blue #C0DDFF(리포트·브랜드 스토리 패널).', tag: '공식', src: '캠페인 에셋 실측' }
            ],
            interpretation: [
              { text: '적색은 브랜드 컬러라기보다 우선순위 신호다. 면으로 깔면 브랜드 규칙에서 벗어난다.', tag: '해석' }
            ]
          },
          {
            key: 'photography', label: 'Photography',
            facts: [
              { text: '저채도 단색 컬러필드 위의 인물, 자연광, 신체 일부 크롭, 그룹샷 비중이 높다. 카메라를 정면으로 보지 않는 컷이 많다.', tag: '공식', src: 'Together we grow 2024 공식 이미지 관찰' }
            ],
            interpretation: [
              { text: '한국 캠페인은 글로벌 에셋을 들여와 쓴다. 한국의 공간과 얼굴이 거의 없다.', tag: '해석' }
            ]
          },
          {
            key: 'keyvisual', label: 'Keyvisual',
            facts: [
              { text: '키비주얼의 주인공은 사진이 아니라 카피 포맷이다. 짧은 평서문 + 마침표("Joy is a power move.")를 좌하단에 Light로 얹는다.', tag: '공식', src: 'lululemon.com 캠페인 관찰' },
              { text: 'Pentagram의 manifesto: 브랜드 문장을 모듈 격자에 타일처럼 깐 활자 패치워크. 쇼핑백, 스토어, 배송박스 내부에 쓴다.', tag: '공식', src: 'Pentagram lululemon manifesto' }
            ],
            interpretation: [
              { text: '평서문 + 마침표 포맷은 캠페인 타이틀의 온점과 이어지는 자리다.', tag: '해석' }
            ]
          },
          {
            key: 'iconography', label: 'Iconography',
            facts: [
              { text: '브랜드 스토리 페이지 패널에 얇은 등고선(웨이브 라인)이 깔린다. manifesto에서는 원형 yogo가 문장 사이 구두점처럼 반복된다.', tag: '공식', src: 'lululemon.co.kr 브랜드 스토리 · Pentagram manifesto' }
            ],
            interpretation: [
              { text: '관찰한 범위에서는 체계화된 아이콘 세트가 보이지 않는다. 웨이브 라인은 한국 집행물에 거의 나오지 않는다.', tag: '해석' }
            ]
          },
          {
            key: 'videography', label: 'Videography',
            facts: [
              { text: 'manifesto 문장 블록이 격자 안에서 바뀌고 회전하는 소셜 애니메이션. Together we grow(2024) 필름은 앰배서더들이 각자의 움직임을 이어 붙이는 구성이다.', tag: '공식', src: 'Pentagram manifesto · Together we grow 2024' }
            ],
            interpretation: [
              { text: '한국에서 따로 만든 영상은 적고 글로벌 필름의 자막판 비중이 높아 보인다.', tag: '해석' }
            ]
          },
          {
            key: 'application', label: 'Application',
            facts: [
              { text: 'manifesto 활자가 인쇄된 쇼핑백, 스토어 환경 그래픽·머럴·윈도, 배송박스 내부 인쇄, 한정판 어패럴.', tag: '공식', src: 'Pentagram manifesto' },
              { text: '청담 매장은 1층 리테일, 3층 요가 스튜디오로 구성된다.', tag: '공식', src: '청담 스토어 보도자료' }
            ],
            interpretation: [
              { text: '열었을 때만 보이는 면(박스 내부)까지 매체로 쓴다. 다시 들고 다니는 쇼핑백이 가장 강한 옥외 매체로 기능한다.', tag: '해석' }
            ]
          }
        ],
        gap: { text: '한국의 공백: 영문은 Light 문장형으로 일관되지만 한글 디스플레이 서체가 없어 한국어 지면에서 브랜드 인상이 끊긴다.', tag: '가정', src: '폰트 스택 관찰(기획자 실측, 검증 전)' }
      }
    },

    /* ─────────────────────────────── P4 배경 */
    background: {
      id: 'background',
      headline: D('자주 사지만, 먼저 떠올리지는 않는다', 'Often bought, rarely first in mind'),
      facts: [
        { text: '룰루레몬 코리아 FY2025(2025.02–2026.01) 매출 2,196.8억 원, 전년 대비 +40.2%. 국내 매장 26개.', tag: '공식', src: '룰루레몬 코리아 감사보고서' },
        { text: '같은 기간 국내 애슬레저 매출 1·2위는 안다르·젝시믹스다.', tag: '가정', src: 'FACTS C 정리값, 원 공시 재확인 필요' },
        { text: 'K-BPI 2026 애슬레저웨어 부문 1–3위는 안다르 · 젝시믹스 · 에이치덱스. 룰루레몬은 없다.', tag: '공식', src: 'KMAC 한국산업의 브랜드파워(K-BPI) 2026, 제3자 조사' },
        { text: '러닝크루 호감 33.9%, 비호감 44.9%. 공원 단체 운동 제한 공고(서초구 반포종합운동장, 여의도공원 등)가 나왔다.', tag: '공식', src: '엠브레인 트렌드모니터 · 각 지자체 공고, 제3자 자료' },
        { text: '러닝 조사를 요가 클래스 장벽의 대리 지표로 쓴다. 요가 장벽에 대한 공개 조사는 찾지 못했다.', tag: '해석' },
        { text: '2030은 깊은 관계보다 부담 없는 연결, 강한 소속감보다 느슨한 연대로 옮겨 가고 있다.', tag: '해석', src: '언론 보도 기반' },
        { text: '팔리지만 떠오르지 않는다. 매출은 카테고리 3위권인데 브랜드파워 상위권에는 없다.', tag: '해석' }
      ]
    },

    /* ─────────────────────────────── P5 문제 */
    problem: {
      id: 'problem',
      headline: D('문은 매주 열리는데 보이지 않는다', 'The door opens every week, few can find it', '★ △', '관찰 재확인 후 확정'),
      headlineAlt: D('들어가는 길이 보이지 않는다', 'The way in is hard to see', '○'),
      barriers: [
        { text: '공식 사이트 커뮤니티 메뉴에 일정·예약 링크가 없다. 인스타그램 바이오 → 링크트리 → 외부 예약으로 돌아 들어간다.', tag: '가정', src: '10-18 관찰 기록, 공개 전 재확인 필요' },
        { text: '정규 클래스가 평일 오전 중심이다.', tag: '가정', src: '인스타그램 안내·후기 블로그 관찰' },
        { text: '안내에 "룰루레몬 제품 착용 권장" 문구가 있다.', tag: '가정', src: '인스타그램 안내 관찰' },
        { text: '선착순으로 열리고 바로 마감된다.', tag: '가정', src: '후기 블로그 관찰' }
      ],
      thresholds: '옷, 시간, 실력, 신청 경로라는 네 가지 심리적 문턱. 이 가운데 신청 경로·시간·복장 문구는 브랜드가 직접 고칠 수 있다.',
      definition: { text: '한국에 커뮤니티가 없는 것이 아니라, 커뮤니티에 드는 비용이 너무 크다. 룰루레몬의 문은 매주 열리지만 보이지 않고, 들어가려면 조건이 붙는다.', tag: '해석' },
      caveat: '위 장벽 관찰(BRIEF #15·#16)이 틀리면 문제 정의와 인사이트 문장을 고쳐야 한다.'
    },

    /* ─────────────────────────────── P6 타깃 */
    target: {
      id: 'target',
      label: '기획 페르소나 · 가정 (실제 인터뷰 아님)',
      tag: '가정',
      who: '운동은 하고 싶고 매장에도 가 봤지만, 클래스 신청 직전에 멈춘 사람.',
      profile: [
        '서울 생활권 20대 후반–30대 초반',
        '요가·필라테스를 끊었다가 다시 하기를 반복한다',
        '룰루레몬 비구매자 또는 1회 구매자'
      ],
      behavior: ['혼자 한다', '모임을 찾아본다', '신청은 하지 않는다', '룰루레몬은 레깅스로만 안다'],
      innerVoice: {
        label: '마음속 문장 (가정)',
        lines: ['혼자 가도 괜찮을까', '잘 못해도 될까', '뭘 입고 가지']
      },
      characters: {
        note: '캠페인 사진의 세 인물은 타깃 자체가 아니라 상태(준비·움직임·쉼·다시)를 맡는 AI 생성 인물이다. 인종을 성격·능력·역할에 연결하지 않는다.',
        list: [
          { id: 'C01', name: '서윤', face: PH('C01_SEOYUN_face-front', 'AI 생성 인물 서윤 정면') },
          { id: 'C02', name: '아마라', face: PH('C02_AMARA_face-front', 'AI 생성 인물 아마라 정면') },
          { id: 'C03', name: '라비', face: PH('C03_RAVI_face-front', 'AI 생성 인물 라비 정면') }
        ]
      }
    },

    /* ─────────────────────────────── P7 인사이트 */
    insight: {
      id: 'insight',
      headline: D('멈춘 건 마음이 아니라 문턱 앞이었다', 'It was never the will, it was the door'),
      headlineAlt: D('설득할 사람보다 치울 조건이 있었다', 'Less to persuade, more to clear away', '○'),
      statement: { text: '사람들을 멈추게 한 것은 의지가 아니라 문턱이다. 그 문턱의 절반은 브랜드가 걸어 두었다. 설득할 대상이 아니라 치울 조건이 있다.', tag: '해석' },
      dependsOn: '「문턱의 절반은 브랜드가 걸었다」는 문제 장의 관찰(예약 경로·시간대·착용 권장 문구)에 기대고 있다. 관찰이 틀리면 이 문장은 무너진다.'
    },

    /* ─────────────────────────────── P8 Project Interview */
    interview: {
      id: 'interview',
      label: '기획자 자문자답',
      notice: '기획자 자문자답이다. 실제 인터뷰 결과가 아니다. 공지 p25가 요구한 「인터뷰지 작성」을 기획자가 스스로 묻고 답한 형식이며, 고객·직원·브랜드 관계자를 인터뷰한 적은 없다. 답변 속 #번호는 BRIEF 주장 분류표 번호다. 표시 없는 문장은 기획자 해석이다.',
      tag: '해석',
      strategy: {
        title: 'Brand Strategy 10',
        items: [
          { n: '01', q: '내가 선정한 브랜드 캠페인의 존재 이유는 무엇인가?', a: ['룰루레몬이 미션에 둔 connect(#1)를 한국에서 운영으로 보여 주기 위해서다. 한국에서 룰루레몬은 팔리지만 먼저 떠오르지 않는다(#10, #11). 제품 광고를 더 하는 대신, 브랜드가 원래 가진 요가 스튜디오의 문을 보이게 한다.'] },
          { n: '02', q: '비즈니스 측면에서 어떤 확장 계획을 가지고 있는가?', a: ['커뮤니티 클래스 예약 경로를 공식 사이트로 옮기고(새로운 제안), 저녁·주말 시간대를 연다. 청담 3층에서 시작해(#17, 가정) 성수·한남 매장의 영업 후 세션으로 넓힌다. 확장 여부는 파일럿의 재방문 지표로 판단한다.'] },
          { n: '03', q: '고객들이 이 캠페인을 찾는 이유는 무엇인가?', a: ['혼자 가도 어색하지 않고, 잘하지 못해도 되는 요가 자리를 미리 확인하고 고를 수 있어서다. 그룹 운동의 사교 부담은 러닝 조사로 간접 확인했을 뿐이다(#13, #14). 요가 클래스에서 같은 부담이 있는지는 아직 확인하지 않았다.'] },
          { n: '04', q: '캠페인이 가지고 있는 남다른 특징이 있다면?', a: ['카피와 운영이 같은 말을 한다. 문턱을 낮춘다는 말은 착용 권장 문구 삭제, 시간대 신설, 예약 경로 신설로 집행된다. 새로 열린 시간이 다음 포스터의 내용이 되므로, 광고는 약속을 설명하지 않고 얼마나 지켰는지를 게시한다.'] },
          { n: '05', q: '캠페인을 통해 외부 고객들이 얻는 혜택은 무엇인가?', a: ['할인이나 증정이 아니라 들어갈 수 있는 길이다. 내 시간에 맞는 클래스, 무엇을 준비할지 미리 아는 안내, 쉬어도 되는 수업, 다음에 다시 올 자리.'] },
          { n: '06', q: '캠페인 활동이 없어졌을 때, 외부 고객은 어떤 점을 가장 아쉬워할까?', a: ['가입하지 않아도 되고 소속을 요구하지 않는 운동 자리. 기획자는 이런 자리가 한국 운동 문화에 드물다고 본다(#21, 해석).'] },
          { n: '07', q: '캠페인을 통해 어떤 문제를 해결하려고 하는가?', a: ['무료인데 들어가기 어려운 문제다. 옷, 시간, 실력, 신청 경로라는 네 가지 심리적 문턱. 이 중 신청 경로·시간·복장 문구는 브랜드가 직접 고칠 수 있다(#15, #16 — 재확인 필요).'] },
          { n: '08', q: '경쟁사 대비 강점/약점은 무엇인가?', a: ['강점: 매주 실제로 운영되는 클래스와 스튜디오, 앰배서더. 운영하지 않는 브랜드가 같은 문장을 쓰면 그 자리에서 거짓말이 된다.', '약점: 상설 스튜디오가 적어 수용 인원이 작다(#17). Alo Yoga도 온라인 수업과 대면 행사를 운영하므로 형식 자체가 독점은 아니다.'] },
          { n: '09', q: '산업 카테고리의 트렌드는 무엇인가?', a: ['애슬레저 시장에서 토종 브랜드는 가격과 규모로, 나이키는 성취의 언어로 경쟁한다(FACTS G). 한편 운동 모임 수는 늘었지만 그룹 운동에 대한 피로와 규제도 늘었다(#13). 브랜드들이 제품 밖의 수업·웰니스 경험을 운영하는 흐름이 있다(Summer Series, Alo Wellness Club).'] },
          { n: '10', q: '온/오프라인에서 가장 중요한 브랜드 경험 접점은?', a: ['온라인: 공식 사이트 커뮤니티 페이지. 지금은 일정과 예약 링크가 없어(#15) 1순위로 고칠 곳이다.', '오프라인: 스튜디오 입구와 매트. 입구 쪽 매트 한 장을 예약 없이 온 사람 몫으로 비워 두는 장면이 캠페인의 상징이다(새로운 제안).'] }
        ]
      },
      design: {
        title: 'Brand Design 5',
        items: [
          { n: '11', q: '캠페인을 사람에 비유한다면 어떤 사람인가?', a: ['먼저 자리를 펴 두고, 말은 필요할 때만 거는 사람. 권하지 않고 기다린다. 친절하지만 사이를 좁히라고 하지 않는다.'] },
          { n: '12', q: '캠페인이 지향하는 이미지는 무엇인가?', a: ['여백이 많은 지면, 짧은 평서문 한 줄, 완성된 자세가 아니라 동작과 동작 사이. 따뜻한 말을 절제된 형식으로 조판한다.'] },
          { n: '13', q: '고객들에게 어떤 이미지로 보여지고 싶은가?', a: ['비싸지만 문턱은 낮은 브랜드. 제품 가격과 품질 기대는 그대로 두고, 참여에 조건을 걸지 않는다.'] },
          { n: '14', q: '닮고 싶은 브랜드/마케팅이 있다면?', a: ['Uber 「On Our Way」: 익숙한 문장을 고쳐 쓰는 언어 장치 (공지 p4)', 'lululemon manifesto(Pentagram): 문장이 곧 그래픽이 되는 자사 자산', 'Nike Run(PORTO ROCHA): 출처가 있는 액센트 컬러 운용', '닮고 싶은 것은 형태가 아니라 "말과 운영이 일치하는 태도"다.'], list: true },
          { n: '15', q: '캠페인 디자인 지향점과 지양점은 무엇인가?', a: ['지향: 문장형 타이포 한 줄, 무채색 바탕과 신호로만 쓰는 적색, 동작 사이·쉼의 사진, 한국의 장소.', '지양: 숫자·연산기호, 배지·스티커·리본·말풍선, 형광 경고색, 취소선·빈칸 채우기, 단체 셀카·매칭 유니폼·기록 오버레이, 조건 나열형 카피. 모두 한국에서 판촉이나 런스타그램의 기호로 읽힌다.'] }
        ]
      },
      toVerify: {
        title: '실제 인터뷰로 확인해야 할 것 (미실시)',
        note: '결과가 나오기 전까지 이 표의 내용을 조사 결과로 쓰지 않는다.',
        rows: [
          { hypothesis: '신청 직전에 멈추는 이유가 사교 부담·복장·시간이다', who: '요가 경험 1~3년, 클래스 미참여 성인', ask: '마지막으로 신청을 망설인 순간과 이유', tag: '가정' },
          { hypothesis: '공식 사이트에서 클래스를 찾지 못한다', who: '룰루레몬 매장 방문 경험자', ask: '클래스를 어디서 알았는지, 어디서 신청했는지', tag: '가정' },
          { hypothesis: '쉼을 허락하는 안내가 재방문 의향을 높인다', who: '첫 참여자', ask: '수업 중 쉬고 싶었던 순간, 다시 올 이유', tag: '가정' }
        ]
      }
    },

    /* ─────────────────────────────── P10 캠페인 BIS */
    bis: {
      id: 'bis',
      intro: '브랜드 공식 BIS는 바꾸지 않고, 그 위에 캠페인 층을 얹는다. 아래는 모두 새로운 제안이다.',
      tag: '제안',
      items: [
        { key: 'name', label: 'Name', value: LOCKUP, text: '관용구 Come as you are에서 동사 하나를 바꿨다(come → move). 상표·선점 여부는 검증하지 않았다.', link: '상시 슬로건 대신 캠페인 단위로 말하는 브랜드 관행', tag: '제안' },
        { key: 'vision', label: 'Vision · Why', text: '각자의 상태와 속도로 움직일 수 있는 도시의 일상.', link: '구 비전의 community를 한국의 생활 반경으로 옮긴다', tag: '제안' },
        { key: 'mission', label: 'Mission · How', text: '참여 앞의 조건을 운영에서 지운다 — 착용 권장 문구 삭제, 저녁·주말 시간 신설, 공식 사이트 예약 경로, 쉼과 다음 방문 안내.', link: '2026 미션 sweat · grow · connect', tag: '제안' },
        { key: 'essence', label: 'Essence', text: '성취가 아니라 움직임.', link: '공식 키비주얼의 평서문 태도', tag: '제안' },
        { key: 'slogan', label: 'Slogan', value: LOCKUP, text: '이름과 슬로건을 나누지 않는다. 국문 부라인은 「지금의 나로, 나의 속도로」(COPY_BANK 1순위).', link: '상시 슬로건이 없는 브랜드 관행', tag: '제안' },
        { key: 'core-values', label: 'Core Values', text: '아래 세 가지.', tag: '제안' }
      ],
      coreValues: [
        {
          key: 'as-you-are',
          name: D('지금의 나로', 'As you are'),
          meaning: '준비를 끝내고 오라고 하지 않는다.',
          operations: ['복장 권장 문구 삭제', '입구 쪽 매트 한 장은 예약 없이 온 사람 몫으로 비워 둔다'],
          official: { text: 'Inclusion', tag: '해석' },
          tag: '제안'
        },
        {
          key: 'own-pace',
          name: D('나의 속도', 'Own pace'),
          meaning: '옆 사람이 아니라 내 호흡이 기준이다.',
          operations: ['난이도·페이스 그룹 표기를 두지 않는다', '동작마다 대안 동작을 안내한다', '쉬는 선택을 존중한다'],
          official: { text: 'Personal Responsibility', tag: '해석' },
          tag: '제안'
        },
        {
          key: 'again',
          name: D('다시', 'Again'),
          meaning: '연속이 아니라 다시 온 날을 센다.',
          operations: ['연속 출석 배지 대신 「다시 움직인 날」을 기록한다', '다음 일정 알림은 동의한 사람에게만 보낸다'],
          official: { text: 'grow (미션 단어)', tag: '해석' },
          tag: '제안'
        }
      ],
      note: 'Connection은 별도 가치로 두지 않는다. 같은 시간과 공간을 쓰는 경험 흐름의 결과로 생긴다(금지어 함께·together와의 충돌도 피한다). 계보: 이전 안의 AS YOU ARE · YOUR PACE · COME AGAIN과 v6 덱의 Again 정의를 문장형으로 정리했다.'
    },

    /* ─────────────────────────────── P11 콘셉트 */
    concept: {
      id: 'concept',
      lockup: LOCKUP,
      origin: {
        from: D(null, 'Come as you are'),
        to: LOCKUP,
        swap: { from: 'come', to: 'move' },
        text: '관용구 Come as you are에서 동사 하나만 바꿨다. come은 부르는 쪽이 주어이고, move는 움직이는 쪽이 주어다. 관용구가 자격을 면제해 준다면, 이 문장은 면제할 자격이 애초에 없었다고 말한다.',
        tag: '제안'
      },
      sub: D('지금 있는 자리에서 시작한다', 'Start from where you are'),
      subAlt: D('브랜드는 말보다 운영을 고친다', 'Less talk, a different way of running', '○'),
      body: [
        '캠페인은 새 활동을 만들지 않는다. 이미 있는 문을 보이게 하고, 문턱을 낮춘다.',
        '지면의 말은 하나로 고정하고, 바뀌는 것은 새로 열린 시간과 장소뿐이다. 시리즈를 늘리는 것은 카피라이터가 아니라 새로 연 클래스다.',
        '혜택은 할인·증정이 아니라 접근이다. 시간과 자리와 안내를 내놓고, 제품 가격은 건드리지 않는다.'
      ],
      revision: {
        title: '교수 피드백을 내용으로 고친 방법',
        feedback: '"요가복의 에르메스인 룰루레몬을 1+1 세일상품처럼 만들었다." 원인은 꾸밈이 아니라 혜택의 문법이었다. 그래서 고급스러운 스타일을 덧입히지 않고 내용을 바꿨다.',
        points: [
          { title: '무엇을 주는가', text: '하나 더(수량)가 아니라 들어갈 수 있는 길(접근). 시간·자리·안내를 준다. 증정·할인·구매 연결이 없다.' },
          { title: '누가 주인공인가', text: '장치(한 명 더)가 아니라 사람의 상태 — 멈춤, 쉼, 다시 옴.' },
          { title: '누가 움직이는가', text: '브랜드가 고객을 설득하지 않고 자기 운영을 고친다(착용 권장 문구 삭제, 시간대 신설, 공식 예약 경로).' },
          { title: '어떤 문법으로 말하는가', text: '숫자·연산기호·조건 나열·기간 한정·선착순 언어를 쓰지 않는다. 평서문 한 줄과 열린 시간만 쓴다.' },
          { title: '가격은 건드리지 않는다', text: '비싸지만 문턱은 낮은 브랜드. 제품 가치를 깎지 않고 참여의 조건만 지운다.' },
          { title: '쉼을 인정한다', text: '「더 많이, 더 싸게」의 반대. 덜 해도, 쉬어도, 다시 와도 된다는 내용 자체가 판촉 서사의 반대편에 선다.' }
        ]
      }
    },

    /* ─────────────────────────────── P12·P13 경험 흐름 · 매체 */
    flow: {
      id: 'flow',
      headline: D('벽에서 매트까지, 그리고 다시', 'From the wall to the mat, and back again'),
      note: '운영 수치(기간, 정원, 시간대)는 모두 제안값이며 실제 승인을 가정하지 않는다. 확인 지표는 내부용이며 포스터·소셜 지면에 싣지 않는다.',
      tag: '제안',
      stages: [
        {
          key: 'meet',
          label: D('만나다', 'Meet'),
          line: D('벽에서 한 문장을 만난다', 'One line on the wall'),
          touchpoint: '환승 통로 포스터 벽, 매장 창, 인스타그램 피드·스토리',
          sees: '문장 하나와 이번 주 열린 요일·장소',
          operations: '같은 문장을 반복하고 일정만 갱신한다',
          kpi: '예약 페이지 유입',
          image: P.subway,
          tag: '제안'
        },
        {
          key: 'book',
          label: D('고르다', 'Book'),
          line: D('나에게 맞는 시간을 고른다', 'Pick a time that fits'),
          touchpoint: '공식 사이트 커뮤니티 페이지(신설)',
          sees: '장소·시간대·준비물·취소 방법을 한 화면에서',
          operations: '인스타그램 → 링크트리 → 외부 예약으로 돌던 경로를 공식 사이트 한 곳으로 옮긴다',
          kpi: '예약 완료, 시간대별 신청',
          image: null,
          tag: '제안'
        },
        {
          key: 'move',
          label: D('움직이다', 'Move'),
          line: D('옆이 아니라 내 호흡에 맞춘다', 'Follow your breath, not the row'),
          touchpoint: '청담 3층 스튜디오, 성수·한남 매장 영업 후 세션(제안)',
          sees: '난이도 구분 없는 클래스, 동작 대안, 강사 안내',
          operations: '착용 권장 문구를 없애고, 비교와 촬영은 선택으로 둔다',
          kpi: '현장 만족 응답',
          image: P.ownPace,
          tag: '제안'
        },
        {
          key: 'rest',
          label: D('쉬다', 'Rest'),
          line: D('쉬는 것도 수련이다', 'Rest is part of the practice'),
          touchpoint: '클래스 중·후',
          sees: '쉬는 자세도 수련으로 안내받는다',
          operations: '쉼을 탈락이 아니라 선택지로 설계하고, 대화는 강요하지 않는다',
          kpi: '두지 않음 — 쉼은 지표로 만들지 않는다',
          image: P.rest,
          tag: '제안'
        },
        {
          key: 'return',
          label: D('다시', 'Return'),
          line: D('다시 온 날을 센다', 'Every return counts'),
          touchpoint: '클래스 후 안내 카드, 앱',
          sees: '다음 열린 시간, 「다시 움직인 날」 기록',
          operations: '연속 일수 배지 대신 복귀를 기록하고, 알림은 동의한 사람에게만 보낸다',
          kpi: '재방문, 첫 구매 전환(별도 추적)',
          image: P.again,
          tag: '제안'
        }
      ]
    },
    media: {
      id: 'media',
      parent: 'flow',
      headline: D('매체마다 하나의 역할', 'One role for each place'),
      roles: [
        { key: 'inform', role: '알리기', places: '환승 통로 포스터 벽, 매장 창, 인스타그램 피드·스토리', does: '문장 하나와 새로 열린 요일·장소만 보여 준다. 설명하지 않는다.', stage: 'meet', tag: '제안' },
        { key: 'decide', role: '판단 돕기', places: '공식 사이트 커뮤니티 예약 페이지', does: '장소·시간대·준비물·취소 방법을 한 화면에 두어 신청 직전의 망설임을 줄인다. 캠페인의 1순위 산출물이다.', stage: 'book', tag: '제안' },
        { key: 'experience', role: '경험', places: '청담 3층 스튜디오, 영업 후 매장 세션', does: '난이도 구분 없는 수업, 쉬어도 되는 안내, 입구 쪽 비워 둔 매트 한 장.', stage: 'move', tag: '제안' },
        { key: 'next', role: '다음 방문', places: '클래스 후 안내 카드, 앱 알림(동의자만)', does: '다음 열린 시간과 「다시 움직인 날」을 남긴다.', stage: 'return', tag: '제안' }
      ],
      note: '유료 매체는 최소로 두고 공식 사이트 예약 경로를 1순위로 만든다. 같은 문장이 접점마다 다른 크기로 나타나지만 조판은 같다.'
    },

    /* ─────────────────────────────── D1–D8 시각 자산 */
    visualAssets: {
      id: 'visual-assets',
      headline: D('로고는 두고, 놓이는 자리를 바꾼다', 'Keep the logo, change the room'),
      intro: '여덟 항목은 따로 고르지 않았다. 브랜드 공식 자산(로고·색·Light 문장형)은 지키고, 캠페인이 더하는 것은 문장 하나와 열린 시간, 그리고 동작 사이의 사진이다.',
      items: [
        {
          id: 'logo',
          label: D('로고', 'Logo'),
          title: D('브랜드 마크는 손대지 않는다', 'The mark stays untouched'),
          reason: '공식 마크를 바꾸면 비공식 제안이 브랜드를 흉내 내는 것처럼 읽힌다. 마크는 원본 SVG로만 쓰고, 캠페인은 타이틀 락업으로 구분한다.',
          connects: '락업은 타이포 항목의 Archivo Light로 조판하고, 로고와 같은 잉크색(#140F0F) 또는 오프화이트만 쓴다.',
          spec: [
            '원본: assets/logo/lululemon.svg (shop.lululemon.com 헤더, currentColor)',
            '색: 잉크 #140F0F 또는 오프화이트 #FDFDF8. 그라디언트·적색 면·외곽선 변형 금지',
            '주변 여백: 심볼 높이 이상',
            '비율 고정, 다시 그리기·늘리기·기울이기 금지',
            '캠페인 락업 「Move as you are.」은 로고와 붙이지 않고 별도 요소로 둔다'
          ],
          asset: 'assets/img/asset/lockup.svg',
          tag: '제안'
        },
        {
          id: 'type',
          label: D('타이포그래피', 'Typography'),
          title: D('얇게 쓰고, 분명하게 읽힌다', 'Light type, clear voice'),
          reason: '브랜드 서체 Saans·Calibre는 라이선스 서체라 수업 과제에 쓸 수 없다. 그래서 같은 Light 굵기와 문장형 태도를 가진 공개 서체로 바꿨다. 영문 락업은 Archivo Light(300), 국문은 Pretendard. 룰루레몬 코리아에는 한글 디스플레이 서체가 없어 보이므로(가정), Pretendard Light·Regular로 한글 지면의 인상을 영문과 맞춘다.',
          connects: '락업의 얇은 획은 사진의 부드러운 측광과 같은 온도로 읽힌다. 크기·굵기·잉크 단계만으로 위계를 만들고 색은 쓰지 않는다.',
          faces: [
            { role: '영문 락업·디스플레이', family: 'Archivo', weight: 'Light 300', license: 'SIL Open Font License', file: 'assets/fonts/Archivo-Variable-latin.woff2' },
            { role: '국문 제목·본문', family: 'Pretendard', weight: 'Light 300 · Regular 400 · Medium 500', license: 'SIL Open Font License', file: 'assets/fonts/PretendardVariable.woff2' }
          ],
          spec: [
            '자간 −2% 통일, 제목 행간 130%, 본문 행간 160%',
            '문장형(첫 글자만 대문자). 워드마크 lululemon은 항상 소문자',
            '이탤릭·대문자 전면 조판·가짜 컨덴싱·장평 변형 금지',
            '국문은 word-break: keep-all, text-wrap: balance. 마지막 줄에 한 낱말만 남기지 않는다',
            '디스플레이 카피에는 온점을 찍지 않는다. 예외는 락업 「Move as you are.」 하나'
          ],
          tag: '제안'
        },
        {
          id: 'color',
          label: D('컬러', 'Color'),
          title: D('바탕은 잉크, 적색은 신호', 'Ink for the ground, red for the signal'),
          reason: '공식 off-white와 off-black을 바탕과 글자에 쓰고, 적색은 브랜드가 실제로 쓰는 방식대로 신호에만 남긴다. 판촉처럼 보이는 형광·경고색 면을 피한다.',
          connects: '사진의 블랙 레벨은 #140F0F, 하이라이트는 #FDFDF8 근처에서 멈추도록 보정해 지면과 사진이 한 색으로 이어진다.',
          swatches: [
            { name: 'Paper', hex: '#FDFDF8', token: '--c-paper', role: '바탕. lululemon 공식 off-white', ratio: '약 70%', origin: { text: '공식', tag: '공식' } },
            { name: 'Ink', hex: '#140F0F', token: '--c-ink', role: '글자·로고·락업. lululemon 공식 off-black. 보조 무채 단계(#4A4545 · #6E6A69 · #EEEDE7)가 약 6% 따로 붙는다', ratio: '약 20%', origin: { text: '공식', tag: '공식' } },
            { name: 'Report Blue', hex: '#C0DDFF', token: '--c-blue', role: '정보. 일정표·다이어그램 배경, 위 글자는 #1F3A5C', ratio: '3% 이하', origin: { text: '브랜드 리포트 패널에서 실측', tag: '공식' } },
            { name: 'Campaign Lime', hex: '#F5FF8E', token: '--c-lime', role: '「새로 열린 시간」 표시 한 가지 용도. 적색과 바로 붙이지 않는다', ratio: '2% 이하', origin: { text: 'Together we grow 2024 캠페인 색 실측. 사용 여부는 아직 결정 전(BRIEF §14)', tag: '가정' } },
            { name: 'Signature Red', hex: '#C8102E', token: '--c-red', role: '신호. 포커스, 열린 자리 표시점. 면으로 깔지 않고 긴 장식 가로선으로 쓰지 않는다', ratio: '1% 이하', origin: { text: 'Pantone 186 C 공식', tag: '공식' } }
          ],
          tag: '제안'
        },
        {
          id: 'photo',
          label: D('사진', 'Photography'),
          title: D('자세보다 그 사이', 'Between the poses'),
          reason: '완성된 자세는 「잘해야 한다」는 문턱을 다시 세운다. 매트를 펴는 순간, 숨 고르는 순간, 다시 일어서는 순간처럼 동작과 동작 사이를 찍는다.',
          connects: '사진 속 매트의 긴 변이 키비주얼의 유일한 선이 된다. 인물이 차지하는 면적을 줄여 남긴 벽이 카피 자리다.',
          spec: [
            '한 스튜디오: 무광 오프화이트 벽, 옅은 회색 콘크리트 바닥, 검은 철제 창틀의 높은 창',
            '광원: 카메라 왼쪽 큰 창 하나, 보조광 없음. 5000–5400K 중립',
            '50–85mm 원근, 눈높이~가슴 높이. 광각 왜곡·로우앵글 영웅 구도 금지',
            '세 인물(서윤·아마라·라비)이 상태를 나눠 맡고, 같은 순간에 같은 동작을 하는 사람은 없다',
            '모든 사진 아래 「AI 생성 이미지」 표기'
          ],
          moodboard: F('assets/img/asset/moodboard.webp', 'AI 무드보드: 생성 컷과 색·재질 칩'),
          images: [P.arrive, P.ownPace, P.rest, P.again, P.waistband, P.feet],
          tag: '제안'
        },
        {
          id: 'keyvisual',
          label: D('키비주얼', 'Keyvisual'),
          title: D('한 장이 아니라 하나의 벽', 'Not a poster, a wall'),
          reason: '시리즈를 늘리는 것은 카피가 아니라 새로 연 클래스다. 같은 문장의 포스터를 가로로 이어 붙여, 열린 시간이 늘어날수록 벽이 길어지게 한다.',
          connects: '고정 요소(락업·조판·색)와 가변 요소(요일·시간대·장소 단어, 사람·동작)를 나눈다. 가변 크레딧은 포스터·예약 화면·피드에서 같은 단어로 쓴다.',
          spec: [
            '고정: 락업 「Move as you are.」, Archivo Light, 잉크·오프화이트',
            '가변: 크레딧 한 줄(예: 목요일 저녁 — 청담)과 사진',
            '선은 사진 속 매트의 긴 변에서만 나온다. 화면을 가로지르는 빨간 장식선은 쓰지 않는다',
            '숫자·시각·정원 표기 없음. 요일·시간대는 단어로'
          ],
          tag: '제안'
        },
        {
          id: 'icons',
          label: D('아이콘', 'Iconography'),
          title: D('꾸미지 않고 안내한다', 'Icons that guide, not decorate'),
          reason: '아이콘은 예약 화면과 안내 카드에서 길을 알려 주는 데만 쓴다. 배지·스티커처럼 판촉으로 읽히는 장식은 만들지 않는다.',
          connects: '선 굵기와 모서리를 타이포의 Light 획에 맞춘다. 잉크색 한 가지, 적색은 포커스와 열린 자리 표시점에만.',
          set: ['시간', '장소', '매트', '쉼', '다시', '재생', '정지', '이동', '닫기', '알림'],
          spec: ['선 아이콘 한 종류, 선 굵기 한 가지', '글자 옆에서 글자 높이에 맞춘다', '아이콘만으로 뜻을 전하지 않고 항상 단어 라벨과 함께 쓴다'],
          path: 'assets/icons/',
          tag: '제안'
        },
        {
          id: 'motion',
          label: D('모션', 'Motion'),
          title: D('카메라는 멈추고 사람만 움직인다', 'A still camera, a moving body'),
          reason: '「나의 속도」를 말로 하지 않고 시간으로 보여 준다. 요소마다 움직이는 시간이 다르고, 쉼에 해당하는 요소가 가장 느리다.',
          connects: '스토리 영상은 고정 카메라 앞의 동작만 담고, 웹 등장 모션은 같은 곡선 토큰을 쓴다.',
          spec: [
            '등장 모션 한 종류: 투명도 600ms(inOut), 이동 800ms(out)',
            '속도 차이: 움직임 720ms · 다시 560ms · 쉼 1400ms',
            '스크롤에 반응하되 스크롤을 빼앗지 않는다',
            '영상은 무음·반복·화면 안에서만 재생, 포스터 프레임과 정지 버튼 필수',
            'prefers-reduced-motion에서는 모든 정보를 정지 상태로 읽을 수 있다'
          ],
          tag: '제안'
        },
        {
          id: 'application',
          label: D('적용', 'Application'),
          title: null,
          reason: '적용은 경험 흐름의 접점 순서를 따른다. 포스터 벽(만나다) → 예약 화면(고르다) → 스튜디오(움직이다·쉬다) → 피드와 안내 카드(다시).',
          connects: '모든 적용물에 락업·잉크색·동작 사이 사진 가운데 하나 이상이 보인다.',
          list: [
            { name: '포스터 네 장', section: 'posters' },
            { name: '광고 목업 — 환승 통로·버스 쉘터·스튜디오 계단', section: 'ad-mockup' },
            { name: '스토리 영상 세 편', section: 'stories' },
            { name: '인스타그램 프로필·게시물·피드 아홉 칸', section: 'social' },
            { name: '예약 화면 평면·다시점 목업', section: 'iphone' }
          ],
          tag: '제안'
        }
      ]
    },

    /* ─────────────────────────────── C1 포스터 */
    posters: {
      id: 'posters',
      headline: D('문장은 하나, 열린 시간은 늘어난다', 'One line, more open hours'),
      rule: '고정되는 것은 락업과 조판, 바뀌는 것은 사진과 크레딧 한 줄뿐이다. 크레딧의 요일·시간대·장소는 운영이 정해지면 그 단어로 바꾼다.',
      fixed: LOCKUP,
      subs: [
        D('잘하지 않아도 되는 요가', 'Yoga without the audition'),
        D('쉬어 가도 되는 시간', 'An hour you can rest in'),
        D('혼자 와도 어색하지 않은 자리', 'A mat that feels like yours'),
        D('잠깐 쉬어도, 나의 움직임', 'Pausing is still moving', '○', '10-19 계승')
      ],
      creditOptions: {
        note: '운영 미확정(△). 포스터 생성기에서 고를 수 있는 단어',
        days: [D('목요일', 'Thursday', '△'), D('토요일', 'Saturday', '△'), D('일요일', 'Sunday', '△')],
        times: [Object.assign(D('아침', 'morning', '△'), { fragment: true }), Object.assign(D('저녁', 'evening', '△'), { fragment: true })],
        places: [D('청담', 'Cheongdam', '△'), D('성수', 'Seongsu', '△'), D('한남', 'Hannam', '△')]
      },
      items: [
        {
          id: 'P01',
          format: '세로 2:3',
          state: '쉼',
          photo: P.rest,
          fixed: LOCKUP,
          sub: D('쉬어 가도 되는 시간', 'An hour you can rest in'),
          credit: D('목요일 저녁 — 청담', 'Thursday evening — Cheongdam', '△', '운영 미확정'),
          file: 'assets/img/poster/P01.webp',
          layout: '사진 위 40% 벽에 락업과 서브, 아래 여백에 크레딧'
        },
        {
          id: 'P02',
          format: '가로 16:9',
          state: '각자의 속도',
          photo: P.ownPace,
          fixed: LOCKUP,
          sub: D('잘하지 않아도 되는 요가', 'Yoga without the audition'),
          credit: D('토요일 아침 — 성수', 'Saturday morning — Seongsu', '△', '운영 미확정'),
          file: 'assets/img/poster/P02.webp',
          layout: '세 사람 위쪽 벽에 락업. 키비주얼·색 기준 컷'
        },
        {
          id: 'P03',
          format: '가로 3:2',
          state: '문턱',
          photo: P.feet,
          fixed: LOCKUP,
          sub: D('혼자 와도 어색하지 않은 자리', 'A mat that feels like yours'),
          credit: D('일요일 저녁 — 한남', 'Sunday evening — Hannam', '△', '운영 미확정'),
          file: 'assets/img/poster/P03.webp',
          layout: '타이포 중심. 맨발이 올라서는 매트 가장자리가 지면의 유일한 선'
        },
        {
          id: 'P04',
          format: '정사각 1:1',
          state: '다시',
          photo: P.again,
          fixed: LOCKUP,
          sub: null,
          credit: D('목요일 저녁 — 청담', 'Thursday evening — Cheongdam', '△', '운영 미확정'),
          file: 'assets/img/poster/P04.webp',
          layout: '락업과 크레딧만. 첫 포스터와 같은 시간·장소로 다시 돌아오는 장면'
        }
      ]
    },

    /* ─────────────────────────────── C2 광고 목업 */
    adMockup: {
      id: 'ad-mockup',
      headline: D('걸어가는 동안 열린 시간이 늘어난다', 'The wall grows as the hours open'),
      body: '포스터는 한 장씩이 아니라 벽으로 붙는다. 퇴근길 환승 통로를 걷는 동안 같은 문장이 반복되고, 크레딧만 바뀐다.',
      items: [
        { key: 'subway', place: '환승 통로 라이트박스 벽', poster: '가로 포스터 연속(P02·P03)', image: F('assets/img/mockup/MK_subway.webp', '환승 통로 라이트박스 벽에 이어 붙인 포스터'), base: 'M01_subway-lightbox-wall', role: '만나다 — 지나가며 같은 문장을 여러 번 본다' },
        { key: 'busshelter', place: '이른 아침 버스 쉘터', poster: '세로 포스터(P01)', image: F('assets/img/mockup/MK_busshelter.webp', '이른 아침 버스 쉘터에 붙은 세로 포스터'), base: 'M02_bus-shelter-dawn', role: '만나다 — 기다리는 동안 크레딧을 읽는다' },
        { key: 'stair', place: '스튜디오 계단 벽', poster: '가로 포스터(P03)', image: F('assets/img/mockup/MK_stair.webp', '스튜디오로 올라가는 계단 벽의 가로 포스터'), base: 'M03_studio-stair-wall', role: '움직이다 직전 — 들어가는 길 위에서 마지막으로 본다' }
      ],
      note: '목업 배경은 AI 생성 장면에 포스터를 합성한 것이다. 실제 집행 장소나 매체 계약을 뜻하지 않는다.'
    },

    /* ─────────────────────────────── C3 스토리 영상 */
    stories: {
      id: 'stories',
      body: '스토리 세 편은 경험 흐름의 처음·가운데·끝을 맡는다. 카메라는 고정하고 사람만 움직인다. 카피는 스토리 화면 위 14–40% 구간에만 둔다.',
      format: '세로 9:16(1080×1920), 무음, 반복 재생',
      items: [
        {
          id: 'ST01',
          stage: D('만나다', 'Meet'),
          copy: D('멈춤 · 동작과 동작 사이', 'Pause · Between two poses'),
          purpose: '퇴근길에 걸음을 잠깐 멈추고 벽의 문장 하나를 만난다. 첫 접점에서 예약 화면까지 데려간다.',
          scenes: [
            { shot: '지하철 계단, 매트를 들고 오르는 서윤', image: P.subway, motion: '고정 카메라, 사람만 천천히 위로' },
            { shot: '계단 위 환승 통로의 포스터 벽', image: F('assets/img/mockup/MK_subway.webp', '환승 통로 포스터 벽'), motion: '걸음이 멈추는 순간' },
            { shot: '락업과 크레딧 한 줄', image: null, motion: '글자는 한 번만 나타난다' }
          ],
          video: 'assets/video/ST01.mp4',
          poster: 'assets/video/ST01-poster.webp',
          still: 'assets/img/story/ST01.webp'
        },
        {
          id: 'ST02',
          stage: D('나의 속도', 'Own pace'),
          copy: D('쉼 · 쉬는 것도 수련이다', 'Rest · Part of the practice'),
          purpose: '나의 속도로 들어와 움직이고, 쉬는 것까지 수련으로 보여 준다. 가장 느린 편이다.',
          scenes: [
            { shot: '물병을 들고 스튜디오로 천천히 걸어 들어오는 아마라', image: P.walkIn, motion: '걸어 들어오는 속도에 맞춘다' },
            { shot: '세 사람이 각자 다른 상태로 움직이는 스튜디오', image: P.ownPace, motion: '사람마다 다른 속도' },
            { shot: '아기 자세로 쉬는 아마라', image: P.rest, motion: '가장 느린 호흡' }
          ],
          video: 'assets/video/ST02.mp4',
          poster: 'assets/video/ST02-poster.webp',
          still: 'assets/img/story/ST02.webp'
        },
        {
          id: 'ST03',
          stage: D('다시', 'Return'),
          copy: D('다시 · 다시 매트 위로', 'Return · Back on the mat'),
          purpose: '연속이 아니라 다시 온 날을 남긴다. 다음 열린 시간 알림으로 이어진다.',
          scenes: [
            { shot: '앉아서 옆구리를 늘이는 라비', image: P.sideStretch, motion: '정지에 가까운 움직임' },
            { shot: '무릎을 꿇었다가 다시 일어나는 라비', image: P.again, motion: '일어서는 한 동작' },
            { shot: '매트 앞에 다시 선 라비', image: P.returnMat, motion: '멈춘 뒤 락업' }
          ],
          video: 'assets/video/ST03.mp4',
          poster: 'assets/video/ST03-poster.webp',
          still: 'assets/img/story/ST03.webp'
        }
      ],
      note: '영상은 AI 생성 정지 이미지를 바탕으로 만든 시안이다. 실제 촬영물이 아니다.'
    },

    /* ─────────────────────────────── C4·C5 소셜 */
    social: {
      id: 'social',
      headline: D('쉬는 장면도 피드가 된다', 'A pause worth sharing'),
      instagram: {
        id: 'instagram',
        handle: 'moveasyouare.class',
        handleNote: '수업용 가상 계정. 실제 룰루레몬 계정이 아니다',
        bio: D('지금의 나로 오는 요가', 'Yoga for the body you have today', '○'),
        mockups: [
          { key: 'profile', image: F('assets/img/mockup/MK_ig_profile.webp', '인스타그램 프로필 그리드 평면 목업') },
          { key: 'post', image: F('assets/img/mockup/MK_ig_post.webp', '피드 게시물 화면 평면 목업') },
          { key: 'story', image: F('assets/img/mockup/MK_ig_story.webp', '스토리 화면 평면 목업') }
        ],
        uiCredit: '화면 구성 참고: Instagram – UI Kit 4.0 (Stan Gursky, Figma Community, CC BY 4.0). Instagram 로고는 넣지 않았다.'
      },
      feed: {
        id: 'feed',
        rule: '아홉 칸은 사람 · 디테일 · 글자 · 경험 · 공간 다섯 역할을 섞는다. 같은 역할이 가로로 붙지 않는다. 글자 칸은 한 번만.',
        roles: {
          person: '사람', detail: '디테일', type: '글자', experience: '경험', space: '공간'
        },
        tiles: [
          { id: 'F01', role: 'person', image: P.rest, caption: D('숨 고르는 중', 'Catching my breath'), file: 'assets/img/feed/F01.webp' },
          { id: 'F02', role: 'detail', image: P.waistband, caption: null, file: 'assets/img/feed/F02.webp' },
          { id: 'F03', role: 'type', image: null, text: LOCKUP, caption: null, file: 'assets/img/feed/F03.webp' },
          { id: 'F04', role: 'experience', image: P.ownPace, caption: D('내 속도로', 'At my own pace'), file: 'assets/img/feed/F04.webp' },
          { id: 'F05', role: 'space', image: F('assets/img/mockup/MK_stair.webp', '스튜디오 계단 벽의 포스터'), caption: null, file: 'assets/img/feed/F05.webp' },
          { id: 'F06', role: 'person', image: P.sideStretch, caption: D('오늘은 여기까지도 좋다', 'Today, this is enough'), file: 'assets/img/feed/F06.webp' },
          { id: 'F07', role: 'detail', image: P.feet, caption: null, file: 'assets/img/feed/F07.webp' },
          { id: 'F08', role: 'experience', image: F('assets/img/mockup/MK_phone_mat.webp', '매트 위에 놓인 폰의 예약 화면'), caption: null, file: 'assets/img/feed/F08.webp' },
          { id: 'F09', role: 'person', image: P.returnMat, caption: D('다시 왔다', 'Back again'), file: 'assets/img/feed/F09.webp' }
        ],
        format: '4:5 (1080×1350). 프로필 그리드에서는 좌우가 잘리므로 핵심은 가운데에 둔다'
      }
    },

    /* ─────────────────────────────── C6·C7 예약 화면 */
    iphone: {
      id: 'iphone',
      body: '캠페인의 1순위 산출물은 광고가 아니라 공식 사이트의 예약 경로다. 한 화면에서 장소·시간대·준비물을 보고, 시각과 정원 숫자 없이 열린 시간만 고른다.',
      screens: {
        title: D('편한 시간을 골라 주세요', 'Choose a time that suits you'),
        guide: D('움직이기 편한 옷이면 된다', 'Wear what you move in'),
        button: D('이 시간으로 예약', 'Book this time'),
        done: D('자리를 맡아 두었어요', 'Your mat is saved'),
        next: D('다음 열린 시간 알림 받기', 'Tell me when the next one opens', '★', '동의한 사람에게만')
      },
      slots: [
        { key: 'thu-eve-cheongdam', when: D('목요일 저녁', 'Thursday evening', '△'), where: D('청담', 'Cheongdam', '△'), isNew: true },
        { key: 'sat-morning-seongsu', when: D('토요일 아침', 'Saturday morning', '△'), where: D('성수', 'Seongsu', '△'), isNew: true },
        { key: 'sun-eve-hannam', when: D('일요일 저녁', 'Sunday evening', '△'), where: D('한남', 'Hannam', '△'), isNew: false }
      ],
      slotNote: '「새로 열린 시간」은 Campaign Lime 점 하나로만 표시한다. 시각·정원·남은 자리 숫자는 쓰지 않는다. 취소 안내는 조건을 나열하지 않는 본문 문장으로 쓴다.',
      flow: ['시간 고르기', '예약', '자리를 맡아 두었어요', '다음 알림 동의(선택)'],
      mockups: {
        flat: '평면 목업: 일반 기기 프레임을 직접 그리고 실제 DOM 화면을 넣는다. 특정 iPhone 모델이라고 부르지 않는다.',
        views: [
          { key: 'hand', image: F('assets/img/mockup/MK_phone_hand.webp', '스튜디오에서 손에 든 폰, 3/4 시점'), base: 'M04_phone-hand-34' },
          { key: 'mat', image: F('assets/img/mockup/MK_phone_mat.webp', '매트 위에 놓인 폰, 위에서 본 시점'), base: 'M05_phone-mat-topdown' },
          { key: 'side', image: F('assets/img/mockup/MK_phone_side.webp', '벤치 위 폰, 측면 시점'), base: 'M06_phone-side-bench' }
        ],
        note: '다시점 목업의 기기는 AI 생성 이미지에 화면을 합성한 것이다. Apple 공식 베젤은 라이선스 범위 밖이라 쓰지 않았다.'
      }
    },

    /* ─────────────────────────────── P9 체크리스트 */
    checklist: {
      id: 'checklist',
      intro: '공지 p26의 다섯 항목이다. 자가 만점을 주지 않는다. 지금의 판단을 적고, 미흡한 항목을 먼저 본다.',
      items: [
        { key: 'awareness', label: '브랜드 인지도 제고', status: '미흡', basis: '제품 대신 브랜드 태도를 남긴다. 그러나 거점 1–3곳과 짧은 기간으로 전국 브랜드파워 순위를 움직일 수 없다.', fix: '1기는 카테고리 언어 선점까지만 책임진다. 접촉자의 연상 변화 조사로 측정한다(가정).' },
        { key: 'consistency', label: '일관된 브랜드 메시지', status: '부분', basis: '문장 하나를 전 매체에 고정하는 구조는 있다. 시각 체계는 이번 웹 쇼잉에서 Light 문장형 한 계열로 정리했지만, 실제 집행물에서 검증하지 않았다.', fix: '포스터·피드·예약 화면을 같은 토큰으로 만들고, 집행 전 매체별로 다시 대조한다.' },
        { key: 'emotion', label: '감정적 연결', status: '부분', basis: '쉼과 복귀를 인정하는 흐름이 관계를 만든다는 설계다. 실제 참여자 검증은 없다.', fix: '소규모 파일럿 인터뷰 계획을 명시한다(자문자답의 「확인해야 할 것」 표).' },
        { key: 'differentiation', label: '시장 차별화', status: '충족(조건부)', basis: '매주 실제로 운영되는 클래스와 스튜디오가 있어야만 쓸 수 있는 문장이다. 다만 Alo도 대면 행사를 운영한다.', fix: '운영 변경(예약 경로·시간대)이 실제로 집행될 때만 성립한다.' },
        { key: 'revenue', label: '장기적 매출 효과', status: '미흡(가설)', basis: '할인을 쓰지 않아 가격 정당성은 지킨다. 참여 규모가 작아 매출 효과를 주장할 수 없다.', fix: '재방문율과 첫 구매 전환까지만 측정하고, 매출 기여는 확장 후에 본다.' }
      ]
    },

    /* ─────────────────────────────── closing */
    closing: {
      id: 'closing',
      headline: D('다음 시간, 이 매트 위에서', 'See you on the mat'),
      headlineAlt: D('오늘의 나로 다시 와요', 'Back on the mat, any day', '○'),
      lockup: LOCKUP,
      image: P.returnMat,
      credits: {
        line: '경험디자인B · 직무수행능력평가 1 · 고해은 22561005 · 지도 조선영 교수 · 2026-10-24',
        notice: '수업용 비공식 캠페인 제안 · AI 생성 이미지'
      }
    },

    /* ─────────────────────────────── sources */
    sources: {
      id: 'sources',
      legend: [
        { tag: '공식', text: '브랜드 공식 자료, 공식 웹사이트에서 직접 관찰한 내용, 공시·감사보고서, 공개된 제3자 조사 원문에서 확인한 사실' },
        { tag: '해석', text: '사실을 바탕으로 기획자가 내린 판단' },
        { tag: '제안', text: '이 캠페인이 새로 제안하는 것. 실제 운영 승인을 가정하지 않는다' },
        { tag: '가정', text: '관찰 기록만 있고 검증하지 않은 내용, 또는 기획 페르소나처럼 가정으로 세운 내용' }
      ],
      brand: [
        { name: 'lululemon corporate — Our Purpose, Mission & Values', url: 'https://corporate.lululemon.com', urlNote: '도메인 수준 주소. 세부 경로는 덱 p09 인용, 재확인 필요', used: 'Purpose·Mission·Core Values' },
        { name: 'lululemon.co.kr 브랜드 스토리', url: 'https://www.lululemon.co.kr', urlNote: '도메인 수준 주소', used: 'Purpose·구 비전 국문 표기, 웨이브 라인 패널' },
        { name: 'lululemon athletica Form 10-K (SEC EDGAR)', url: 'https://www.sec.gov/edgar', urlNote: '도메인 수준 주소', used: '구 비전 삭제, 핵심가치' },
        { name: 'lululemon Global Wellbeing Report 2024', url: 'https://corporate.lululemon.com', urlNote: '도메인 수준 주소', used: '한국 웰비잉 지수, 외로움 지표' },
        { name: 'shop.lululemon.com 헤더 로고 SVG (2026-10-24 저장)', url: 'https://shop.lululemon.com', used: '공식 로고 원본' },
        { name: '룰루레몬 코리아 감사보고서 FY2025', url: 'https://dart.fss.or.kr', urlNote: '전자공시 도메인', used: '매출·매장 수' },
        { name: 'KMAC 한국산업의 브랜드파워(K-BPI) 2026', url: '', urlNote: 'FACTS D 정리, 원문 주소 재확인 필요', used: '애슬레저 부문 순위' },
        { name: '엠브레인 트렌드모니터 러닝크루 인식 조사', url: '', urlNote: 'FACTS E 정리, 원문 주소 재확인 필요', used: '러닝크루 호감·비호감' },
        { name: 'Pentagram — lululemon manifesto', url: 'https://www.pentagram.com', urlNote: '도메인 수준 주소', used: '키비주얼·적용 관찰' }
      ],
      products: {
        note: '캐릭터 착장을 맞추기 위한 내부 참고. 제품 이미지는 이 웹에 싣지 않는다. 가격은 기록하지 않았다. 확인일 2026-10-24.',
        items: [
          { name: 'lululemon Align™ High-Rise Pant 25"', color: 'Black', url: 'https://shop.lululemon.com/p/align-pant-2/i4goprzy85?color=0001' },
          { name: 'lululemon Align™ Tank Top *Light Support, A/B Cup', color: 'White', url: 'https://shop.lululemon.com/p/align-tank/mnt6w420dl?color=0002' },
          { name: 'Define Jacket *Nulu', color: 'Black', url: 'https://shop.lululemon.com/p/define-jacket-nulu/hnsjuvo8dn?color=0001' },
          { name: 'lululemon Energy Bra *Medium Support, B–D Cups', color: 'Lululemon Red', url: 'https://shop.lululemon.com/p/energy-bra-32925/dj1t34ty1k?color=19295' },
          { name: 'Wunder Train High-Rise Tight 25"', color: 'Graphite Grey', url: 'https://shop.lululemon.com/p/wunder-train-hr-tight-25/qnd4lof1dl?color=30210' },
          { name: 'Balancer Relaxed-Fit Pant *Regular (Men)', color: 'Black', url: 'https://shop.lululemon.com/p/balancer-relaxed-fit-pant-regular/vupsxt4b8p?color=0001' },
          { name: 'Brushed Yoga Crewneck T-Shirt (Men)', color: 'Onyx Grey', url: 'https://shop.lululemon.com/p/brushed-yoga-crewneck-t-shirt/dz76t8itoo?color=72760' },
          { name: 'Metal Vent Tech Short-Sleeve Shirt (Men) — 대안', color: 'White/White', url: 'https://shop.lululemon.com/p/metal-vent-tech-short-sleeve-shirt-3/lbhe17vi2f?color=12826' }
        ]
      },
      references: {
        note: '레퍼런스의 로고·사진·카피·색 값은 이 웹에 들어가지 않는다. 구조와 원리만 분석했다(02_reference_analysis/SYNTHESIS.md). 열람일 2026-10-24.',
        items: [
          { name: 'Plus X — unni', url: 'https://www.plus-ex.com/experience#unni' },
          { name: 'Plus X — km', url: 'https://www.plus-ex.com/experience#km' },
          { name: 'Plus X — unix_web', url: 'https://www.plus-ex.com/experience#unix_web' },
          { name: 'Plus X — musinsa', url: 'https://www.plus-ex.com/experience#musinsa' },
          { name: 'Plus X — KOLON MALL · H FASHION · LAZY NIGHT', url: 'https://www.plus-ex.com/experience' },
          { name: 'Wolff Olins — Benefit', url: 'https://wolffolins.com/work/benefit' },
          { name: 'Pinterest 보드 「경험디자인」(핀 38개, 레퍼런스 전용)', url: 'https://kr.pinterest.com/henkoo6326/경험디자인/' }
        ]
      },
      mockupSources: [
        { name: 'Instagram – UI Kit 4.0 (Stan Gursky, CC BY 4.0)', url: 'https://www.figma.com/community/file/1341818988006002653/instagram-ui-kit-4-0', used: '인스타그램 화면 구성 참고' },
        { name: 'Apple Design Resources — Product Bezels', url: 'https://developer.apple.com/design/resources/#product-bezels', used: '사용하지 않음. 라이선스가 Apple OS 전용 앱 UI 목업으로 한정됨' }
      ],
      ai: {
        midjourney: {
          profile: '경험디자인_룰루레몬',
          code: '9cuixkm',
          settings: '모델 8.2, --raw, 개인화 켜기. 캐릭터 일관성은 Edit Model(참조 이미지 최대 4장)로 맞췄다',
          doc: 'https://docs.midjourney.com/hc/en-us/articles/48495453462797-Edit-Model',
          excluded: '10-19 세션의 프로필 「경험」(kzzyruu) 생성물은 이번 프로필 규칙과 맞지 않아 쓰지 않았다'
        },
        retouch: {
          tool: 'Codex CLI 0.162 (image_gen)',
          method: 'Codex 편집은 이미지를 통째로 다시 생성하므로, 고칠 부분만 잘라 편집한 뒤 원본 위에 마스크로 합성했다. 잘라 낸 영역 밖의 화소는 코드로 원본을 지켰다.',
          edits: [
            '서윤 전신 측면: 낮은 포니테일 → 앵커와 같은 느슨한 번',
            '라비 전신 측면: 짙은 흑발 → 앵커와 같은 희끗한 머리'
          ],
          log: '07_retouched/retouch_log.json'
        },
        label: AI
      },
      fonts: [
        { name: 'Pretendard', license: 'SIL Open Font License' },
        { name: 'Archivo', license: 'SIL Open Font License' }
      ],
      exclusions: '작년 학생 결과물은 열람·인용하지 않았다.',
      noticePages: '공지 「브랜드 캠페인 기획서」(37p) 쪽 번호와 웹 섹션의 대응은 requirementsMap의 source 칸에 있다.'
    },

    /* ─────────────────────────────── 요구사항 대응표 */
    requirementsMap: [
      { id: 'P1', label: '브랜드 선정 이유', sectionId: 'why-lululemon', source: '새 요청', required: '◐', status: '완료' },
      { id: 'P2', label: '브랜드 분석 — 언어 자산(BIS 6항목)', sectionId: 'brand-analysis', source: '공지 p22', required: '●', status: '완료' },
      { id: 'P3', label: '브랜드 분석 — 현재 시각 자산 8종', sectionId: 'brand-analysis', source: '공지 p23 (예시 p24)', required: '●', status: '완료' },
      { id: 'P4', label: '배경', sectionId: 'background', source: '새 요청', required: '◐', status: '완료' },
      { id: 'P5', label: '문제', sectionId: 'problem', source: '새 요청 (공지 p25 Q7)', required: '◐', status: '완료 · 관찰 #15는 10-24 재확인, #16·#17은 가정' },
      { id: 'P6', label: '타깃', sectionId: 'target', source: '새 요청', required: '◐', status: '완료 · 기획 페르소나(가정)' },
      { id: 'P7', label: '인사이트', sectionId: 'insight', source: '새 요청', required: '◐', status: '완료' },
      { id: 'P8', label: 'Project Interview — Strategy 10 + Design 5', sectionId: 'interview', source: '공지 p25', required: '●', status: '완료 · 기획자 자문자답' },
      { id: 'P9', label: 'Brand Campaign Checklist 5항목', sectionId: 'checklist', source: '공지 p26', required: '●', status: '완료 · 미흡 2 · 부분 2 · 충족(조건부) 1' },
      { id: 'P10', label: 'BIS — 캠페인 언어 자산 + 핵심가치 3', sectionId: 'bis', source: '공지 p22 + 새 요청', required: '●', status: '완료' },
      { id: 'P11', label: '캠페인 콘셉트', sectionId: 'concept', source: '공지 p27 + 새 요청', required: '●', status: '완료' },
      { id: 'P12', label: '경험 흐름', sectionId: 'flow', source: '새 요청', required: '◐', status: '완료' },
      { id: 'P13', label: 'Campaign Media Strategy', sectionId: 'media', source: '공지 p36', required: '●', status: '완료' },
      { id: 'D1', label: '시각 자산 요약 (8항목)', sectionId: 'visual-assets', source: '공지 p27', required: '●', status: '완료' },
      { id: 'D2', label: '로고 / 캠페인 타이틀 락업', sectionId: 'logo', source: '공지 p28', required: '●', status: '완료 · 공식 로고 원본 + 락업 SVG' },
      { id: 'D3', label: '타이포그래피 + 선정 이유', sectionId: 'type', source: '공지 p29', required: '●', status: '완료' },
      { id: 'D4', label: '컬러 + 선정 이유', sectionId: 'color', source: '공지 p30', required: '●', status: '완료 · 라임은 열린 시간 표시 한 용도(면적 2% 이하)' },
      { id: 'D5', label: '포토그래피 + AI 무드보드 + 선정 이유', sectionId: 'photo', source: '공지 p31 + 새 요청', required: '●', status: '완료 · AI 무드보드 포함' },
      { id: 'D6', label: '키비주얼 콘셉트', sectionId: 'keyvisual', source: '공지 p32', required: '●', status: '완료' },
      { id: 'D7', label: '아이코노그래피', sectionId: 'icons', source: '공지 p33(선택) / 새 요청', required: '◐', status: '완료 · 안내용 아이콘 10종' },
      { id: 'D8', label: '비디오그래피 · 모션 · 인터랙션', sectionId: 'motion', source: '공지 p34', required: '●', status: '완료 · 영상 3편 + 모션 토큰' },
      { id: 'D9', label: 'Application', sectionId: 'posters', source: '공지 p35', required: '●', status: '완료 (C1–C7)' },
      { id: 'C1', label: '포스터 3장 이상', sectionId: 'posters', source: '새 요청', required: '◐', status: '완료 · 포스터 4종' },
      { id: 'C2', label: '광고 목업', sectionId: 'ad-mockup', source: '새 요청', required: '◐', status: '완료 · 환승 통로·버스 쉘터·계단 벽 합성' },
      { id: 'C3', label: '스토리 영상 3편', sectionId: 'stories', source: '새 요청', required: '◐', status: '완료 · 10초 무음 3편(MJ 모션 + 코드 합성)' },
      { id: 'C4', label: '인스타그램 목업 (프로필·게시물)', sectionId: 'instagram', source: '새 요청', required: '◐', status: '완료 · 직접 그린 인스타그램형 화면(Meta 자산 아님)' },
      { id: 'C5', label: '피드 9칸', sectionId: 'feed', source: '새 요청', required: '◐', status: '완료 · 9장' },
      { id: 'C6', label: '아이폰 평면 목업', sectionId: 'iphone', source: '새 요청', required: '◐', status: '완료 · 일반 기기 프레임 평면 목업' },
      { id: 'C7', label: '아이폰 다시점 목업', sectionId: 'iphone', source: '새 요청', required: '◐', status: '완료 · AI 생성 기기 다시점(특정 모델 아님)' }
    ]
  };
})();

/* C-02 재편집 쇼잉(c02-a · c02-b · c02-c) 공통 본문 — 세 안은 이 파일의 문장과 자산만 쓰고 배치만 다르다.
   편집 근거: 11_web/C02_REEDIT/EDIT_TABLE.md
   규칙: 섹션마다 핵심 메시지 하나 · 영문 라벨 하나 · 제목은 필요한 곳에만 · 이미지에 보이는 것을 캡션으로 다시 쓰지 않는다
   제작 고지(AI 생성·합성·가상 계정)는 매 이미지 아래가 아니라 크레딧(credits)과 프로젝트 자료 페이지에 한 번 둔다 */
(function () {
  var A = '../assets/';
  function ph(id, alt) { return { src: A + 'img/photo/' + id + '.webp', small: A + 'img/photo/' + id + '-960.webp', alt: alt }; }
  function mk(id, alt) { return { src: A + 'img/mockup/' + id + '.webp', small: A + 'img/mockup/' + id + '-960.webp', alt: alt }; }
  function po(id, alt) { return { src: A + 'img/poster/' + id + '.webp', small: A + 'img/poster/' + id + '-960.webp', alt: alt }; }
  var DOC = '../project/';

  window.SH = {
    doc: DOC,
    title: 'Move as you are.',
    line: '지금의 나로, 나의 속도로',
    define: '준비를 끝내고 오라고 하지 않는 요가 클래스 캠페인',

    /* 프로젝트 정보 — 성격(수업용 비공식 제안)을 여기서 한 번 분명히 밝힌다 */
    info: [
      ['Client', 'lululemon Korea — 비공식 제안'],
      ['Scope', 'Campaign · BIS · Photography · OOH · Social · Booking'],
      ['Year', '2026'],
      ['Course', '경험디자인B 직무수행능력평가 1']
    ],

    /* 개요: 브랜드 선정·배경·문제·타깃·인사이트를 두 문단으로. 숫자는 출처 번호로 자료 페이지와 연결 */
    overview: {
      label: 'Overview',
      title: '문은 열려 있는데, 들어가는 길이 보이지 않는다',
      p1: ['룰루레몬 코리아의 매출은 FY2025에 40.2% 늘었지만', { ref: 1 }, ' 국내 애슬레저웨어 브랜드파워 조사에서는 상위 세 브랜드에 들지 못했다.', { ref: 2 }, ' 팔리는 만큼 기억되지는 않는다는 이 간극을, 브랜드가 이미 운영하는 커뮤니티 클래스로 메울 수 있다고 봤다. 그런데 공식 사이트의 커뮤니티 페이지는 클래스 참여를 권하면서도 신청할 곳을 알려 주지 않는다.', { ref: 3 }],
      p2: ['이 캠페인이 상정한 사람은 요가를 끊었다 다시 하기를 반복하다 클래스 신청 직전에 멈춘 사람이다. 그를 설득하는 대신, 브랜드가 직접 고칠 수 있는 문턱을 운영에서 지운다. 신청 경로부터 만들고, 시간대와 복장 안내는 실제 일정을 확인한 뒤 바꾼다.', { ref: 4 }],
      questions: ['혼자 가도 괜찮을까', '잘 못해도 될까', '뭘 입고 가지'],
      insight: '멈춘 건 의지가 아니라 문턱이었다'
    },

    /* 지금의 경로(확인) → 제안하는 경로. 도식 하나로 문제와 해법을 함께 보여 준다 */
    route: {
      now: { label: '지금 — 2026-10-24 확인', steps: ['상단 메뉴 ‘커뮤니티’', '앰배서더 소개 페이지', '신청 링크 없음, 개인 인스타그램으로'] },
      next: { label: '제안', steps: ['포스터·피드의 크레딧 한 줄', '공식 사이트 예약 화면', '장소·시간대·준비물을 보고 신청'] }
    },

    concept: {
      label: 'Concept',
      body: '준비를 마치고 오라고 하지 않는다. 문장 하나를 모든 접점에 고정하고, 새로 연 클래스의 요일과 장소만 바꿔 단다. 혜택은 할인이나 증정이 아니라 들어갈 수 있는 시간과 자리, 그리고 안내다.',
      values: [
        { ko: '지금의 나로', en: 'As you are', does: '복장 권장 문구를 지우고, 입구 쪽 매트 한 장은 예약 없이 온 사람 몫으로 둔다' },
        { ko: '나의 속도', en: 'Own pace', does: '난이도 등급 대신 동작마다 대안을 안내하고, 쉬는 것을 수련의 일부로 둔다' },
        { ko: '다시', en: 'Again', does: '연속 출석 대신 다시 온 날을 기록하고, 다음 열린 시간은 동의한 사람에게만 알린다' }
      ]
    },

    /* BIS 요약 — 전체 근거와 공식 자산 대응은 자료 페이지 #bis */
    bis: [
      { k: 'Name · Slogan', v: 'Move as you are.', s: '지금의 나로, 나의 속도로' },
      { k: 'Vision', v: '각자의 상태와 속도로 움직일 수 있는 도시의 일상' },
      { k: 'Mission', v: '참여 앞의 조건을 운영에서 지운다' },
      { k: 'Essence', v: '성취가 아니라 움직임' }
    ],

    /* 시각 규칙 — 규칙 한 문단 + 적용 결과(기존 완성물의 부분 확대) */
    photo: {
      label: 'Photography',
      body: '정점 동작 대신 매트를 펴고, 숨을 고르고, 다시 일어서는 순간을 찍는다. 한 스튜디오와 왼쪽 창 하나의 빛, 같은 색 보정으로 세 사람을 한 시리즈로 묶고, 매트의 긴 변을 화면에 남는 유일한 선으로 둔다.',
      arrive: ph('C01_SEOYUN_S01-arrive', '빈 스튜디오 바닥에 무릎을 꿇고 검은 매트를 펴는 여성'),
      wide: ph('ALL_S02-own-pace', '같은 스튜디오에서 한 사람은 앉아 숨을 고르고, 한 사람은 낮은 런지, 한 사람은 선 자세'),
      rest: ph('C02_AMARA_S03-rest', '아기 자세로 눈을 감고 쉬는 여성'),
      again: ph('C03_RAVI_S04-again', '무릎을 꿇었다가 다시 일어나는 남성'),
      stretch: ph('C03_RAVI_S08-side-stretch', '매트에 앉아 한 팔을 넘겨 옆구리를 늘이는 남성'),
      feet: ph('C01_SEOYUN_S05b-feet', '매트 끝에 올라서는 맨발'),
      waist: ph('C01_SEOYUN_S05a-waistband', '레깅스 허리밴드를 정리하는 손'),
      walkin: ph('C02_AMARA_S07-walk-in', '스튜디오 문으로 천천히 걸어 들어오는 여성'),
      returnMat: ph('C03_RAVI_S09-return-mat', '매트 앞에 다시 선 남성')
    },
    type: {
      label: 'Typography',
      body: '영문 락업은 Archivo Light, 국문은 Pretendard로 조판한다. 룰루레몬 헤드라인의 가벼운 문장형 태도를 공개 서체로 옮기고, 굵기를 더하는 대신 크기로만 위계를 만든다.'
    },
    color: {
      label: 'Color',
      body: '지면 대부분은 공식 오프화이트와 오프블랙이다. 라임은 ‘새로 열린 시간’ 한 가지에, 블루는 일정 정보에, 적색은 포커스 같은 신호에만 쓴다.',
      swatches: [
        { name: 'Off White', hex: '#FDFDF8', role: '바탕', ratio: 70 },
        { name: 'Off Black', hex: '#140F0F', role: '글자·로고·락업', ratio: 20 },
        { name: 'Report Blue', hex: '#C0DDFF', role: '일정·정보', ratio: 5 },
        { name: 'Campaign Lime', hex: '#F5FF8E', role: '새로 열린 시간', ratio: 3 },
        { name: 'Signature Red', hex: '#C8102E', role: '포커스·신호', ratio: 2 }
      ]
    },
    logo: {
      label: 'Logo',
      body: '공식 로고는 원본 그대로 한 색으로만 쓰고, 주변에 심볼 높이 이상의 여백을 둔다. 캠페인 타이틀은 로고와 떨어진 별도 락업이다.'
    },
    keyvisual: {
      label: 'Keyvisual',
      body: '한 장이 아니라 하나의 벽이다. 같은 문장의 포스터를 이어 붙이고, 새로 연 클래스마다 크레딧 한 줄만 바꾼 포스터를 더한다.'
    },
    icons: {
      label: 'Iconography',
      body: '예약 화면과 안내 카드에 필요한 열 가지만 둔다. 획은 락업의 Light 굵기에 맞추고, 아이콘만으로 뜻을 전하지 않도록 늘 단어와 함께 쓴다.',
      list: [['time', '시간'], ['place', '장소'], ['mat', '매트'], ['rest', '쉼'], ['return', '다시'], ['bell', '알림'], ['arrow', '이동'], ['play', '재생'], ['pause', '멈춤'], ['close', '닫기']]
    },
    motion: {
      label: 'Motion',
      body: '카메라는 멈추고 사람만 움직인다. 글자는 상태마다 다른 속도로 들어오고, 쉼의 문장이 가장 느리다.',
      paces: [['움직임', 'Move', 720], ['다시', 'Again', 560], ['쉼', 'Rest', 1400]]
    },

    /* 적용 결과물 */
    posters: {
      label: 'Posters',
      body: '네 장은 사진과 구도가 다르지만 락업, 조판, 크레딧의 위치는 같다. 크레딧 한 줄에는 새로 연 클래스의 요일과 장소가 들어가고, 지금 지면의 일정은 예시다.',
      items: [
        po('P01', '세로 포스터 — 아기 자세로 쉬는 여성 위의 락업'),
        po('P02', '가로 포스터 — 각자 다른 자세의 세 사람 위의 락업'),
        po('P03', '가로 포스터 — 큰 락업과 매트 끝 맨발 사진'),
        po('P04', '정사각 포스터 — 다시 일어서는 남성과 작은 락업')
      ],
      ratios: ['2 / 3', '16 / 9', '3 / 2', '1 / 1'],
      /* 키비주얼 규칙과 포스터를 한 묶음으로 보여 줄 때(안 A·C) 쓰는 한 문단 */
      wall: '한 장이 아니라 하나의 벽이다. 같은 문장의 포스터를 이어 붙이고, 새로 연 클래스마다 크레딧 한 줄만 바꾼다. 네 장은 사진과 구도가 달라도 락업, 조판, 크레딧의 위치가 같다. 지금 지면에 적힌 요일과 장소는 예시다.'
    },
    ooh: {
      label: 'Out of home',
      body: '퇴근길 환승 통로, 새벽 버스 쉘터, 스튜디오 계단처럼 클래스로 가는 길 위에 붙인다. 걷는 동안 같은 문장을 여러 번 만나고, 크레딧만 바뀐다.',
      subway: mk('MK_subway', '환승 통로 라이트박스 벽에 이어 붙인 캠페인 포스터'),
      bus: mk('MK_busshelter', '새벽 버스 쉘터에 붙은 세로 포스터'),
      stair: mk('MK_stair', '스튜디오 계단 벽에 붙은 가로 포스터')
    },
    booking: {
      label: 'Booking',
      body: '가장 먼저 만들 것은 광고가 아니라 예약 경로다. 공식 사이트 안의 한 화면에서 장소와 시간대, 준비물을 보고 고르면 ‘자리를 맡아 두었어요’로 끝난다. 다음 열린 시간 알림은 원하는 사람만 켠다.',
      flat: [{ src: A + 'img/asset/BK01.webp', small: A + 'img/asset/BK01.webp', alt: '예약 화면 — 편한 시간을 골라 주세요. 장소와 시간대를 단어로 고른다' }, { src: A + 'img/asset/BK02.webp', small: A + 'img/asset/BK02.webp', alt: '예약 완료 화면 — 자리를 맡아 두었어요. 다음 열린 시간 알림 스위치' }],
      hand: mk('MK_phone_hand', '스튜디오 창가에서 예약 화면을 띄운 휴대폰을 든 손'),
      mat: mk('MK_phone_mat', '매트와 수건 옆에 놓인 휴대폰의 예약 화면'),
      side: mk('MK_phone_side', '벤치에 세워 둔 휴대폰의 예약 완료 화면')
    },
    stories: {
      label: 'Stories',
      body: '9:16 세로 화면에서 카메라는 고정하고 사람만 움직인다. 세 편이 만나다, 나의 속도, 다시를 하나씩 맡고, 소리 없이도 화면 글자로 읽힌다.',
      items: [
        { id: 'ST01', title: '퇴근길, 벽에서 한 문장을 만난다', src: A + 'video/ST01.mp4', poster: A + 'video/ST01-poster.webp', still: A + 'img/story/ST01.webp' },
        { id: 'ST02', title: '내 속도로', src: A + 'video/ST02.mp4', poster: A + 'video/ST02-poster.webp', still: A + 'img/story/ST02.webp' },
        { id: 'ST03', title: '다시 매트 위로', src: A + 'video/ST03.mp4', poster: A + 'video/ST03-poster.webp', still: A + 'img/story/ST03.webp' }
      ],
      screen: mk('MK_ig_story', '인스타그램형 스토리 화면에 띄운 캠페인 스토리')
    },
    feed: {
      label: 'Feed',
      body: '아홉 칸에 사람, 글자, 디테일, 정보, 공간을 번갈아 놓아 같은 구성이 이웃하지 않게 했다. 프로필 격자에서는 좌우가 잘리므로 핵심은 가운데에 둔다.',
      items: ['F01', 'F02', 'F03', 'F04', 'F05', 'F06', 'F07', 'F08', 'F09'].map(function (f) { return { id: f, src: A + 'img/feed/' + f + '.webp', small: A + 'img/feed/' + f + '-960.webp' }; }),
      alts: { F01: '매트를 펴는 여성과 작은 락업', F02: '종이 바탕의 큰 락업', F03: '매트 끝에 올라서는 맨발', F04: '장소·시간·준비·쉼을 단어로 안내하는 정보 카드', F05: '아기 자세로 쉬는 여성과 「쉬는 것도 수련이다」', F06: '문으로 걸어 들어오는 여성과 「내 속도로」', F07: '허리밴드를 정리하는 손', F08: '잉크 바탕의 「오늘은 여기까지도 좋다」', F09: '세 사람과 「다음 시간, 이 매트 위에서」' },
      profile: mk('MK_ig_profile', '인스타그램형 프로필 화면 두 장 — 아홉 칸 격자'),
      post: mk('MK_ig_post', '인스타그램형 게시물 화면 — 매트를 펴는 여성')
    },

    /* 경험 단계 — 안 C의 묶음과 안 A·B의 예약 흐름에서 쓴다 */
    steps: {
      meet: { en: 'Meet', ko: '만나다', text: '퇴근길 환승 통로에서 같은 문장을 반복해 만난다. 포스터마다 바뀌는 것은 새로 열린 요일과 장소 한 줄이다.' },
      book: { en: 'Book', ko: '고르다', text: '공식 사이트 한 화면에서 장소와 시간대, 준비물을 보고 고른다. 시각과 정원 숫자 대신 새로 열린 시간만 표시한다.' },
      move: { en: 'Move', ko: '움직이다', text: '난이도 구분 없는 클래스에서 옆 사람이 아니라 자기 호흡에 맞춘다.' },
      rest: { en: 'Rest', ko: '쉬다', text: '쉬는 자세도 수련으로 안내한다. 강사의 한 줄은 이렇다. “쉬고 싶으면 아기 자세로 내려와도 괜찮아요.”' },
      ret: { en: 'Return', ko: '다시', text: '연속 출석 대신 다시 온 날을 남기고, 다음 열린 시간은 동의한 사람에게만 알린다.' }
    },

    closing: { title: '다음 시간, 이 매트 위에서' },

    /* 크레딧 — 제작 고지는 여기 한 곳에 모은다(라이선스 표기 포함) */
    credits: {
      nature: '경험디자인B 직무수행능력평가 1 수업 과제로 만든 비공식 캠페인 제안이다. 룰루레몬의 공식 캠페인이 아니며, 브랜드와 협업하거나 승인받지 않았다. 시간대·예약 경로·안내 문구 같은 운영 변경은 모두 제안이다.',
      images: '인물·장면 사진과 목업의 배경은 Midjourney(개인화 프로필 「경험디자인_룰루레몬」)로 생성하고 보정한 AI 이미지다. 등장하는 세 사람은 실존 모델이나 조사 참여자가 아니며, 스튜디오와 옥외 장면도 실제 집행 현장이 아니다. 스토리 영상 세 편은 생성 이미지를 움직이고 글자를 합성한 시안이다. 포스터와 목업 합성, 예약 화면과 인스타그램형 화면은 직접 디자인했고, 계정 moveasyouare.class는 가상 계정이다.',
      rights: 'lululemon 로고는 공식 원본 SVG를 변형 없이 썼으며 상표권은 lululemon athletica에 있다. 서체 Archivo · Pretendard(SIL Open Font License). 인스타그램형 화면의 구성은 Instagram – UI Kit 4.0(Stan Gursky, CC BY 4.0)을 참고했고, Meta의 공식 자산이 아니다.',
      people: [['Design', '고해은 22561005'], ['Advisor', '조선영 교수'], ['Date', '2026.10']]
    }
  };
})();

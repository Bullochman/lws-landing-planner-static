/* LWS Landing Planner — i18n dictionary
 *
 * Korean-first. Every visible string appears in both `en` and `ko`. No hardcoded
 * English is allowed in the DOM; every user-visible text goes through
 * data-i18n / data-i18n-placeholder attributes and lookup below.
 *
 * KR terminology sourced from LWS_Knowledge_Base/kb/15-glossary.md and
 * per-article KR-EN tables:
 *   - Landing / drop:     랜딩, 착륙, 낙하 (colloquial ко-carry from S1 discourse)
 *   - Alliance Furnace:   동맹 화로 / 연맹 용광로 (KB [[06-season-2-frozen]])
 *   - Hive:               벌집 (KB [[08-alliance-systems]])
 *   - Rally leader:       집결 리더 / 리더 (KB [[04-squads-combat]])
 *   - Freeze / frozen:    냉동 / 얼음 상태 (KB [[06-season-2-frozen]])
 *   - Anchor coord:       기준 좌표 / 앵커
 *   - Season 2:           시즌 2 / 폴라 스톰
 */

(function (global) {
  var I18N = {
    en: {
      // Header + brand
      brand:               'R5TOOLS.IO',
      brandSub:            'LWS Suite',
      toolName:            'Landing Planner',
      toolTagline:         'Season-2 Day-1 teleport coordinator',
      langToggle:          '한국어',

      // Anchor section
      anchorHeading:       'Day-1 Anchor',
      anchorSub:           'Where the Alliance Furnace will be placed. Corner tiles (-15 °C) are safest; every band inward drops ~15 °C.',
      anchorXLabel:        'Anchor X (0–1200)',
      anchorYLabel:        'Anchor Y (0–1200)',
      furnaceLevelLabel:   'Alliance Furnace level (1–20)',
      warzoneLabel:        'Warzone / server (optional)',
      metricAmbient:       'Ambient temp',
      metricFurnaceBonus:  'Furnace bonus',
      metricEffective:     'Inside-radius temp',
      metricMembers:       'Members placed',

      // Roster section
      rosterHeading:       'Alliance Roster',
      rosterSub:           'Upload CSV (columns: name, rank, hq_level, power, notes). Same format as the Hive Grid Manager — one CSV works across every LWS tool.',
      rosterUploadBtn:     'Upload CSV',
      rosterLoadSample:    'Load sample roster',
      rosterCount:         'members loaded',

      // Assignments section
      assignHeading:       'Landing Assignments',
      assignSub:           'Highest-rank / highest-power members go inside the Alliance Furnace heat radius. R1–R2 spread outward on the defensive ring.',
      assignBtn:           'Assign landing tiles',
      colName:             'Name',
      colRank:             'Rank',
      colHQ:               'HQ',
      colPower:            'Power',
      colCoord:            'Coord (X, Y)',
      colDelta:            'Δ from anchor',
      colRing:             'Ring',
      colTemp:             'Tile °C',
      colRisk:             'Freeze risk',
      riskSafe:            'Safe',
      riskWarn:            'Watch',
      riskDanger:          'Danger',

      // Preview + export
      previewHeading:      'Landing Preview',
      previewSub:          'Visual layout of the assigned tiles around the anchor. Discord-ready PNG export ships in v1.1.',
      exportPngBtn:        'Export PNG (Discord)',
      exportCsvBtn:        'Export CSV',
      exportJsonBtn:       'Export JSON',
      exportShareBtn:      'Copy Discord share block',

      // Warnings + status
      warnTitle:           'Data caveats',
      warnFurnaceRadius:   'Alliance Furnace tile radius is a KB gap (open question #1). The safe zone shown here uses a placeholder value; verify in-game before locking a plan.',
      warnAnchorRange:     'Anchor coordinates must be integers in 0–1200.',
      warnNoRoster:        'Upload a roster CSV or load the sample to continue.',

      // Footer
      footerCred:          'Powered by the LWS Knowledge Base',
      footerBackLink:      'All tools · r5tools.io',

      // Access-codes gate
      gateBlockedTitle:    'Alliance Access Code required',
      gateBlockedBody:     'Unlock once with your alliance code to use every LWS tool for 90 days.',
      gateBlockedBtn:      'Enter code →',
    },

    ko: {
      // Header + brand
      brand:               'R5TOOLS.IO',
      brandSub:            'LWS 스위트',
      toolName:            '랜딩 플래너',
      toolTagline:         '시즌 2 첫날 순간이동 코디네이터',
      langToggle:          'EN',

      // Anchor section
      anchorHeading:       '첫날 앵커 좌표',
      anchorSub:           '동맹 화로를 배치할 위치입니다. 코너 타일(-15 °C)이 가장 안전하며, 안쪽으로 갈수록 약 15 °C씩 낮아집니다.',
      anchorXLabel:        '앵커 X (0–1200)',
      anchorYLabel:        '앵커 Y (0–1200)',
      furnaceLevelLabel:   '동맹 화로 레벨 (1–20)',
      warzoneLabel:        '워존 / 서버 (선택)',
      metricAmbient:       '지면 온도',
      metricFurnaceBonus:  '화로 보너스',
      metricEffective:     '반경 내 온도',
      metricMembers:       '배치된 인원',

      // Roster section
      rosterHeading:       '연맹 명단',
      rosterSub:           'CSV 업로드 (열: name, rank, hq_level, power, notes). 하이브 그리드 매니저와 동일한 형식 — 하나의 CSV가 모든 LWS 도구에서 작동합니다.',
      rosterUploadBtn:     'CSV 업로드',
      rosterLoadSample:    '샘플 명단 불러오기',
      rosterCount:         '명 로드됨',

      // Assignments section
      assignHeading:       '착륙 배치',
      assignSub:           '가장 높은 랭크 / 파워의 멤버가 동맹 화로 열 반경 안에 배치됩니다. R1–R2는 방어 링 바깥으로 배치됩니다.',
      assignBtn:           '착륙 타일 할당',
      colName:             '이름',
      colRank:             '랭크',
      colHQ:               'HQ',
      colPower:            '파워',
      colCoord:            '좌표 (X, Y)',
      colDelta:            '앵커 기준 Δ',
      colRing:             '링',
      colTemp:             '타일 °C',
      colRisk:             '냉동 위험',
      riskSafe:            '안전',
      riskWarn:            '주의',
      riskDanger:          '위험',

      // Preview + export
      previewHeading:      '착륙 미리보기',
      previewSub:          '앵커 주변에 할당된 타일의 시각적 레이아웃. Discord용 PNG 내보내기는 v1.1에서 제공됩니다.',
      exportPngBtn:        'PNG 내보내기 (Discord)',
      exportCsvBtn:        'CSV 내보내기',
      exportJsonBtn:       'JSON 내보내기',
      exportShareBtn:      'Discord 공유 블록 복사',

      // Warnings + status
      warnTitle:           '데이터 유의사항',
      warnFurnaceRadius:   '동맹 화로 타일 반경은 KB 미확정 항목입니다(공개 질문 #1). 여기 표시된 안전 구역은 임시 값이며, 계획을 확정하기 전에 게임 내에서 확인하세요.',
      warnAnchorRange:     '앵커 좌표는 0–1200 범위의 정수여야 합니다.',
      warnNoRoster:        '계속하려면 명단 CSV를 업로드하거나 샘플을 불러오세요.',

      // Footer
      footerCred:          'LWS 지식 베이스에서 지원',
      footerBackLink:      '모든 도구 · r5tools.io',

      // Access-codes gate
      gateBlockedTitle:    '연맹 액세스 코드 필요',
      gateBlockedBody:     '연맹 코드로 한 번 잠금 해제하면 90일 동안 모든 LWS 도구를 사용할 수 있습니다.',
      gateBlockedBtn:      '코드 입력 →',
    },
  };

  var state = {
    lang: (navigator.language || 'en').toLowerCase().startsWith('ko') ? 'ko' : 'en',
    listeners: [],
  };

  function t(key) {
    var dict = I18N[state.lang] || I18N.en;
    return dict[key] != null ? dict[key] : (I18N.en[key] || key);
  }

  function apply(root) {
    root = root || document;
    root.documentElement && (root.documentElement.lang = state.lang);
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    root.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    root.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.title = t(el.getAttribute('data-i18n-title'));
    });
    state.listeners.forEach(function (fn) { try { fn(state.lang); } catch (e) {} });
  }

  function setLang(l) {
    if (l !== 'en' && l !== 'ko') return;
    state.lang = l;
    apply();
  }

  function toggle() {
    setLang(state.lang === 'en' ? 'ko' : 'en');
  }

  function onChange(fn) { state.listeners.push(fn); }
  function currentLang() { return state.lang; }

  global.LWSi18n = { t: t, apply: apply, setLang: setLang, toggle: toggle, onChange: onChange, lang: currentLang };
})(window);

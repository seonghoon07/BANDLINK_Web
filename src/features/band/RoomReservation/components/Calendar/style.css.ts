import { globalStyle } from '@vanilla-extract/css';
import theme from '@/shared/styles/theme.css';
import { font } from '@/shared/styles/font.css';
import { flex } from '@/shared/styles/flex.css';

globalStyle('.fc td, .fc th, .fc-scrollgrid', {
  // 테이블 셀
  border: 'none',
});

globalStyle('.fc td', {
  borderRadius: '8px',
});

globalStyle('.fc-theme-standard .fc-scrollgrid', {
  // 테이블 테두리
  border: 'none',
});

globalStyle('.fc .fc-daygrid-day.fc-day-today', {
  background: 'none',
});

globalStyle('.fc .fc-daygrid-day-frame', {
  borderRadius: '5px',
});

globalStyle('.fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-frame', {
  border: `1px solid ${theme.yellow['500']}`,
});

globalStyle('.fc-daygrid-day-number', {
  // 날짜 텍스트
  color: theme.white,
  ...font.p1,
});

globalStyle('.fc .fc-daygrid-day-top', {
  // 날짜 div
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
});

globalStyle('.fc .fc-daygrid-day-frame', {
  // 날짜 div 상위
  padding: '14px 8px',
});

globalStyle('.fc .fc-daygrid-body-natural .fc-daygrid-day-events', {
  // 날짜 이벤트 div
  marginBottom: '0',
});

globalStyle('.fc .fc-scrollgrid-section-sticky > *', {
  backgroundColor: 'transparent',
});

globalStyle('.fc .fc-col-header-cell-cushion', {
  // 요일 텍스트
  color: theme.gray['300'],
  ...font.p2,
});

globalStyle('.fc-toolbar-chunk', {
  // 툴바 div
  ...flex.CENTER,
});

globalStyle('.fc-toolbar-title', {
  // 타이틀 텍스트
  ...font.s1,
  color: theme.white,
});

globalStyle('.fc .fc-button .fc-icon', {
  // 화살표 아이콘
  fontSize: '2.2rem',
});

globalStyle('.fc .fc-button-primary', {
  // 아이콘 div
  backgroundColor: 'transparent',
  border: 'none',
});

globalStyle('.fc .fc-button-primary:hover', {
  // 아이콘 클릭 시
  backgroundColor: 'transparent',
  border: 'none',
});

globalStyle('.fc .fc-button:focus, .fc .fc-button:focus-visible', {
  // 아이콘 포커스 시
  outline: 'none',
  boxShadow: 'none',
  borderRadius: '8px',
  WebkitTapHighlightColor: 'transparent',
});

globalStyle('.fc .fc-day-past .fc-daygrid-day-number', {
  // 오늘보다 전날일 시
  color: theme.gray['500'] + '!important',
});

globalStyle('.fc .fc-day-other .fc-daygrid-day-top', {
  // 다른 달 날짜 div
  opacity: '1',
});

import { globalFontFace, globalStyle } from '@vanilla-extract/css';

globalFontFace('Pretendard', {
  src: 'url("/fonts/PretendardVariable.woff2") format("woff2")',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});
globalStyle('body', {
  fontFamily: 'Pretendard',
});
export const font = {
  h1: {
    fontSize: '32px',
    lineHeight: '120%',
    fontWeight: 700,
  },
  h2: {
    fontSize: '28px',
    lineHeight: '120%',
    fontWeight: 600,
  },
  h3: {
    fontSize: '24px',
    lineHeight: '120%',
    fontWeight: 600,
  },
  h4: {
    fontSize: '20px',
    lineHeight: '120%',
    fontWeight: 500,
  },
  h5: {
    fontSize: '18px',
    lineHeight: '120%',
    fontWeight: 600,
  },
  s1: {
    fontSize: '20px',
    lineHeight: '130%',
    fontWeight: 600,
  },
  s2: {
    fontSize: '18px',
    lineHeight: '130%',
    fontWeight: 500,
  },
  p1: {
    fontSize: '16px',
    lineHeight: '120%',
    fontWeight: 400,
  },
  p2: {
    fontSize: '15px',
    lineHeight: '120%',
    fontWeight: 400,
  },
  p3: {
    fontSize: '14px',
    lineHeight: '120%',
    fontWeight: 400,
  },
  caption: {
    fontSize: '12px',
    lineHeight: '120%',
    fontWeight: 400,
  },
  btn1: {
    fontSize: '16px',
    lineHeight: '120%',
    fontWeight: 600,
  },
  btn2: {
    fontSize: '15px',
    lineHeight: '125%',
    fontWeight: 500,
  },
  btn3: {
    fontSize: '14px',
    lineHeight: '130%',
    fontWeight: 500,
  },
};

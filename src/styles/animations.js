// vendors
import { css } from 'styled-components';

export default css`
  --animation-speed-superfast: 100ms;
  --animation-speed-fast: 250ms;
  --animation-speed-default: 400ms;
  --animation-speed-slow: 800ms;
  --animation-speed-superslow: 1200ms;

  --animation-easing-inQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
  --animation-easing-outQuint: 'cubic-bezier(0.23, 1, 0.32, 1)';
  --animation-easing-inBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)';
  --animation-easing-outBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  --animation-easing-inOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
  --animation-easing-inCustom: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)';
  --animation-easing-outCustom: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
`;

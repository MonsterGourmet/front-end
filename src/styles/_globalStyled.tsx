'use client';

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }
  :root {
		--color-Alert1: #cd2b31;
		--color-Alert2: #fdd8d8;
		--color-Alert3: #ffe5e5;

		--color-Sucess1: #18794e;
		--color-Sucess2: #ccebd7;
		--color-Sucess3: #ddf3e4;

		--color-Random1: #e34d8c;
		--color-Random2: #c04277;
		--color-Random3: #7d2a4d;
		--color-Random4: #7000ff;
		--color-Random5: #6200e3;
		--color-Random6: #36007d;
		--color-Random7: #349974;
		--color-Random8: #2a7d5f;
		--color-Random9: #153d2e;
		--color-Random10: #6100ff;
		--color-Random11: #5700e3;
		--color-Random12: #30007d;

		--color-Brand1: #F77A20BF;
		--color-Brand2: #5126ea;
		--color-Brand3: #b0a6f0;
		--color-Brand4: #edeafd;

		--color-Grey0: #0b0d0d;
		--color-Grey1: #212529;
		--color-Grey2: 	   #495057;
		--color-Grey3: 	   #868e96;
		--color-Grey4: 	   #adb5bd;
		--color-Grey5: 	   #ced4da;
		--color-Grey6: 	   #dee2e6;
		--color-Grey7: 	   #e9ecef;
		--color-Grey8: 	   #f1f3f5;
		--color-Grey9: 	   #f8f9fa;
		--color-Grey10: 	   #fdfdfd;
		--color-White:#ffffff;

		--slider-Widht: 250px;
	}

`;
 
export default GlobalStyle;
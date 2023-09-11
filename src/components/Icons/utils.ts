export default function swapThemes(status: string){
     const theme = {
          backgroundColor: '',
          hover: '',
          color: '',
     }

     switch (status) {
          case 'Open':
               theme.backgroundColor = 'rgba( 255, 255, 255, 0.1 )';
               theme.hover = ` var(--color-Brand1) `;
               theme.color = ` var(--color-Brand1) `;
               return theme;
          case 'Close':
               theme.backgroundColor = 'rgba( 255, 255, 255, 0.1 )';
               theme.hover = 'red'
               theme.color = 'red'
               return theme;
          default:
            return theme;
     }
}



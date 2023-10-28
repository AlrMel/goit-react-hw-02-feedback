// import { Component } from 'react';

// export class Section extends Component {
//   render() {
//     const { title, children } = this.props;
//     return (
//       <section>
//         <h2>{title}</h2>
//         {children}
//       </section>
//     );
//   }
// }

import css from './Section.module.css'

const Section = ({ title, children }) => (
    <section className={css.section}>
      <h1 className={css.mainTitle}>{title}</h1>
      {children}
    </section>
  );

  export default Section;

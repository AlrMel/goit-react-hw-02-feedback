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

const Section = ({ title, children }) => (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );

  export default Section;

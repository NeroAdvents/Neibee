import React from 'react';



// export class Information extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: this.props.match.params
//         }
//
//         console.log(this.state.id);
//     }
//
//     render() {
//
//         return(
//             <div>
//                 <h1>InformationPage</h1>
//             </div>
//         );
//     }
// }

export function Information({ match}) {
    return (
      <div>
          {match.params.id}
      </div>
    );
}

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Input = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <label>
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <p>Number</p>
        <label>
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Tel"
            value={number}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

// export class Input extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     this.props.onSubmit(name, number);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <p>Name</p>
//           <label>
//             <input
//               type="text"
//               name="name"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               placeholder="Name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>

//           <p>Number</p>
//           <label>
//             <input
//               type="tel"
//               name="number"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               placeholder="Tel"
//               value={number}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button type="submit">Add contact</button>
//         </form>
//       </>
//     );
//   }
// }

Input.propTypes = {
  onSubmit: PropTypes.func,
};

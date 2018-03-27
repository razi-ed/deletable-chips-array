# deletable-chips-array
- `ChipsArray` renders an Array of Deletable chips
- & takes following props:
- `Data`,
- `onDelete()` :
    `handleDelete = deleteThis => () => {
     const data = [...this.state.data].filter(ele => ele !== deleteThis);
     this.setState({ data });
     };`
- `dataEmptyMsg`: Msg to be shown when data is empty

- clone -> `yarn install` -> `yarn start`

-  project was bootstrapped with Create React App and created using www.codesandbox.io

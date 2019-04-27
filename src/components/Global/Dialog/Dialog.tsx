import React from 'react'

type DialogType = {
  onClose: any;
  isOpen: any;
}

const Dialog: React.SFC<any> = props => {
  let dialog: any = (
    <div className={"dialog"}>
      <button className={"dialogClose"} onClick={props.onClose}>X</button>
      <div>{props.children}</div>
    </div>
  );

  if (!props.isOpen) {
    dialog = null;
  }

  return (
    <div>
      {dialog}
    </div>
  )
}

export default Dialog;

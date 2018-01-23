import React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
  container?: Element;
}
export interface PortalState {}

class Portal extends React.Component<PortalProps, PortalState> {
  public props: PortalProps;
  private container: Element;

  constructor(props: PortalProps) {
    super(props);
    this.props = props;
    this.container = props.container || document.createElement('div');
  }

  /**
   * 若没有默认的 container 则将 container 插入进 body 体里面
   */
  public componentWillMount() {
    if (!this.props.container) {
      document.body.appendChild(this.container);
    }
  }

  /**
   * 若没有默认的 container 则将 container 从 body 体里面移除
   */
  public componentWillUnmount() {
    if (!this.props.container) {
      document.body.removeChild(this.container);
    }
  }

  public render() {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}

export default Portal;

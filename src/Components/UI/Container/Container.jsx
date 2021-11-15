import { container } from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={container}>{children}</div>;
};

export default Container;
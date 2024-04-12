import classes from './loading-out.module.css';

export default function Spinner() {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}></div>
    </div>
  );
}

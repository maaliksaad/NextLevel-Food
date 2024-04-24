import classes from "./loading.module.css";

export default function loader() {
  return <p className={classes.loading}>fetching meals...</p>;
}

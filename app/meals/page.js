import classes from "./page.module.css";

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
      </header>
      <main className={classes.main}></main>
    </>
  );
};

export default MealsPage;

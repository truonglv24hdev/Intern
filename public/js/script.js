const handleSliderChange = (event) => {
  const value = event.target.value;
  setBalanceLimit(value);

  const percent =
    ((value - event.target.min) / (event.target.max - event.target.min)) * 100;
  event.target.style.setProperty("--slider-percentage", `${percent}%`);
};
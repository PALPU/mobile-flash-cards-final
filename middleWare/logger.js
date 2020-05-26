/**
 *  @description :creating logger middleware to console the actions
 *  @returns    :returns the value that we get after performing the action
 */

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action is: ", action);
  const value = next(action);
  console.log("The new state is: ", store.getState());
  console.groupEnd();
  return value;
};

export default logger;

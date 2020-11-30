module.exports.setContent = (page) => {
  let content = "";
  switch (page) {
    case "about":
      content += `<h1>This is about!<h1>`;
      break;
    case "contact":
      content += `<h1>This is contact</h1>`;
      break;
    default:
      content += `<h1>This is Home</h1>`;
  }
  return content;
};

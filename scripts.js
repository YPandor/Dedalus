function displaySkill(skill, paragraph) {
    
    switch (skill) {
        case "html":
            skillToShow = "html"
        break;
      case "css":
            skillToShow = "css"
        break;
      case "javascript":
        skillToShow = "javascript"
        break;
            case "php":
        skillToShow = "php"
        break;
            case "systems":
        skillToShow = "systems"
        break;
        default:
            break;
  }
  
  switch (paragraph) {
    case "htmlParagraph":
      paragraphToSHow = "htmlParagraph"
      break;
    case "cssParagraph":
      paragraphToSHow = "cssParagraph"
      break;
    case "javascriptParagraph":
      paragraphToSHow = "javascriptParagraph"
      break;
    case "phpParagraph":
      paragraphToSHow = "phpParagraph"
      break;
    case "systemsParagraph":
      paragraphToSHow = "systemsParagraph"
      break;
    default:
      break;
  }

    // get the paragraph
    var paragraphToSHow = document.getElementById(paragraphToSHow);

    // get the current value of the paragraph's display property
    var displaySetting = paragraphToSHow.style.display;

    // toggle the paragraph
    if (displaySetting == 'block') {
      // paragraph is visible. hide it
      paragraphToSHow.style.display = 'none';
    }
    else {
      // paragraph is hidden. show it
      paragraphToSHow.style.display = 'block';
    }
  
  //console.log(skillToShow);
  }
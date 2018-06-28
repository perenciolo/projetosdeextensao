// ALTERADO PARA RODAR NO BROWSER 

/** HELPERS **/

/**
 * Helper to return a string no special characters and lowercase
 *
 * @param str type string - string to change
 *
 * @returns (string)
 */
var accentsTidy = function (str) {
  var r = str.toLowerCase();
  r = r.replace(new RegExp(/\s/g), "");
  r = r.replace(new RegExp(/[àáâãäå]/g), "a");
  r = r.replace(new RegExp(/æ/g), "ae");
  r = r.replace(new RegExp(/ç/g), "c");
  r = r.replace(new RegExp(/[èéêë]/g), "e");
  r = r.replace(new RegExp(/[ìíîï]/g), "i");
  r = r.replace(new RegExp(/ñ/g), "n");
  r = r.replace(new RegExp(/[òóôõö]/g), "o");
  r = r.replace(new RegExp(/œ/g), "oe");
  r = r.replace(new RegExp(/[ùúûü]/g), "u");
  r = r.replace(new RegExp(/[ýÿ]/g), "y");
  r = r.replace(new RegExp(/\W/g), "");
  return r;
};

// Changes context page based on the given path
var activateRoute = function (path, newWindow, origin) {
  if (!origin) {
    origin = window.location.origin;
  }
  // Path is === '/#'? If true keep in the same context
  if (path !== '/#' && path !== '#' && path !== '' && path !== null && path !== 'null' && path !== 'false' && path !== false) {
    if (newWindow) {
      // is local
      if (!path.split("/")[0] === "http" || !path.split("/")[0] === "https") {
        window.open(origin + path, "_blank");
      }
      // is external
      window.open(path, "_blank");
      return;
    }
    window.location.href = path;
  }
};

// Emit data to a given attribute
var emitData = function (response, target) {
  response.forEach(function (data) {
    target.push(data);
  });
};

// Helper to return an excerpt
var excerpt = function (str) {
  if (str.length > 24) {
    return str.substr(0, 25) + "...";
  } else {
    return str;
  }
};

/**
 * Helper to return a string word based excerpt
 *
 * @param str type string - string to excerpt
 * @param words? type number - return (words) words from str @default 50
 *
 * @returns (words) words of str
 */
var excerptWords = function (str, words) {
  if (!str) {
    return false;
  }
  if (!words) {
    words = 50;
  }

  str = str.replace(/\s\s+/g, ' ');
  var wordsList = str.split(' ');
  var numWords = wordsList.lenght;
  wordsList = wordsList.slice(0, words);

  return wordsList.join(' ') + '...';
};

/**
 *  Helper
 *  Given a tag returns PublishingPageImage path
 *  @param tag type string
 */
var getPublishingPageImage = function (tag, home) {
  if (!home) {
    home = 'http://www.pucminas.br';
  }
  if (process.env.NODE_ENV === "development") {
    if (tag.indexOf("?") !== -1) {
      return home + tag.split('"')[3].split("?")[0];
    }
    return home + tag.split('"')[3];
  } else {
    if (tag.indexOf("?") !== -1) {
      return tag.split('"')[3].split("?")[0];
    }
    return tag.split('"')[3];
  }
};

// Helper to get a random number
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Console error dispatch
var handleError = function (error) {
  console.dir(error);
};

// Helper method to get axios promise
var helperAxios = function (
  uri,
  method,
  headers
) {
  if (!method) {
    method = "GET";
  }
  if (!headers) {
    headers = {
      "Content-Type": "application/json",
      Accept: "application/json;odata=verbose"
    };
  }
  return axios({
    method: method,
    url: uri,
    headers: headers
  });
};

// Helper to verify if the given item is published
var isPublished = function (publishDate, publishTimeout) {
  return (
    Date.now() >= Date.parse(publishDate) &&
    Date.now() <= Date.parse(publishTimeout)
  );
};

// Helper to trim left white spaces
var leftTrim = function (str) {
  if (str) {
    return str.replace(/^\s+/, "");
  } else {
    return str;
  }
};

// Helper to call a function randonly
var randomize = function (callback) {
  var max = this.banners.length;
  var min = 0;
  var index = min;
  if (index <= max) {
    index++;
  } else if (index > max) {
    index = min;
  }
  callback(index);
};

// Helper to trim right white spaces
var rightTrim = function (str) {
  if (str) {
    return str.replace(/\s+$/, "");
  } else {
    return str;
  }
};
/** /HELPERS **/
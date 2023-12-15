export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bd1ec16a05msh29330374374591ap11d866jsne3360ba98180',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeoptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bd1ec16a05msh29330374374591ap11d866jsne3360ba98180',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {

  const response = await fetch(url, options);

  const data = await response.json();

  return data;
}
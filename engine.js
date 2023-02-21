// var ci, cs, rt, at;
var
  ci = '26731186254-odugkqn68d6d1g6tj3kjpvf299vk9e95.apps.googleusercontent.com',
  cs = 'E44LiAGNh1uCLT4HRINzjJbM',
  rt = '1//04PUNGBtuksaICgYIARAAGAQSNwF-L9IrsbzqEs1R2FrrPV2dzTDjyuU2ROs-lJqBlaIX37rEoH7NTaM7ypGQPqB5_73nIvy0TRo',
  at = 'ya29.a0AVvZVsqxBZy-gNF0eWxELMCqLoehrJXr76vfvohJl2ov-I_nPDK8euC4ExOSdbMIOG1Q9Rh5SgEZw7tIfP2MN_fNC72dDoYxGqm9YGJI74y2kEDO6VtEnl8XejvqEZ4zUfFj95zH8P5R1TSbC6Is3tMyTb11aCgYKASASARMSFQGbdwaIspS0slzuSs-P5YbzovtaEQ0163',
  ac = '4/0AWtgzh5IcqP3xfAOgA4rmuk7V6W8QU1EEQbmjvl0SmZOPcWyDUU-ZzgrAK0x-kAQ9hm-YA';

async function getSh() {
  getSheets(1).then(res => console.log(res))
}

async function getBQ() {
  getDataBQ().then(res => console.log(res))
}

async function getAccessToken() {
  let url = 'https://oauth2.googleapis.com/token';
  let payload = {
    client_id: ci,
    client_secret: cs,
    refresh_token: rt,
    grant_type: 'refresh_token'
  };
  let res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
  at = (await res.json()).access_token;
  console.log(at);
}

async function getSheets(spreadSheetId_) {
  let spreadSheetId = '148MV4z9oke2ICid5ZHnQMuz90C-YeuAmc0MiE-uQbss';
  try {
    await getAccessToken();
    var url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadSheetId}?includeGridData=false`;
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${at}`
      }
    })
      .then(response => response.json());
    return res.sheets
    // return (await res.json()).sheets
  } catch (e) {
    console.error(e);
  }
}

// avocado-368421.mydataset.mytable

async function getDataBQ() {
  console.log('getDataBQ');
  await getAccessToken();
  // "query": "SELECT address, phone FROM `avocado-368421.pereplan.pereplan_table` where regexp_contains(address, r'(?i)(мич.*7)');",
  let request = {
    "query": "SELECT address, phone FROM `avocado-368421.pereplan.pereplan_table` where regexp_contains(address, r'(?i)(мич.*7)');",
    "useLegacySql": false
  };
  let url = 'https://bigquery.googleapis.com/bigquery/v2/projects/avocado-368421/queries';
  let res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${at}`
    },
    body: JSON.stringify(request)
  })
    .then(response => response.json());
  return res.rows

  let
    rows = job.rows,
    arr = [];
  if (rows) {
    rows.forEach(row => {
      arr.push(row.f.map(item => item.v));
    })
  }
}
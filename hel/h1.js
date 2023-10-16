const _ = require('lodash');

const data = [
  { score: 100, org_id: 'ORG00026' },
  { score: 100, org_id: 'ORG00084' },
  { score: 60, org_id: 'ORG00093' },
  { score: 43, org_id: 'ORG00094' },
  { score: 93, org_id: 'ORG00103' },
  { score: 66, org_id: 'ORG00104' },
  { score: 57, org_id: 'ORG00108' },
  { score: 31, org_id: 'ORG00109' },
  { score: 94, org_id: 'ORG00123' },
  { score: 94, org_id: 'ORG00125' },
  { score: 100, org_id: 'ORG00126' },
  { score: 67, org_id: 'ORG00133' },
  { score: 52, org_id: 'ORG00134' },
  { score: 49, org_id: 'ORG00142' },
  { score: 71, org_id: 'ORG00166' },
  { score: 72, org_id: 'ORG00178' },
  { score: 58, org_id: 'ORG00182' },
  { score: 77, org_id: 'ORG00183' },
  { score: 69, org_id: 'ORG00188' },
  { score: 38, org_id: 'ORG00194' }
];

const appConfig = {
  lowScore: 33,
  mediumScore: 66
};

const filteredData = _.filter(data, (statsObj) => {
  return statsObj.score <= appConfig.mediumScore && statsObj.score > appConfig.lowScore;
});

const count = filteredData.length;

console.log(count);

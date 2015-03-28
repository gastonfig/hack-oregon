"use strict";

var ElasticFacade = (function() {

  var dataSeriesFixtures = {
    "schools" : [{
      "id" : 123,
      "name" : "Jackson Elementary",
      "type" : "E",
      "data_series" : {
        "MathPctMet" : [
          { "year_ending" : "2004-07-01", "value" : 12.5 },
          { "year_ending" : "2005-07-01", "value" : 17.5 },
          { "year_ending" : "2006-07-01", "value" : 22.5 },
          { "year_ending" : "2007-07-01", "value" : 27.5 },
          { "year_ending" : "2008-07-01", "value" : 32.5 },
          { "year_ending" : "2009-07-01", "value" : 37.5 },
          { "year_ending" : "2010-07-01", "value" : 42.5 },
          { "year_ending" : "2011-07-01", "value" : 47.5 },
          { "year_ending" : "2012-07-01", "value" : 52.5 },
          { "year_ending" : "2013-07-01", "value" : 57.5 },
          { "year_ending" : "2014-07-01", "value" : 62.5 }
        ],
        "ReadingPctMet" : [
          { "year_ending" : "2004-07-01", "value" : 36.0 },
          { "year_ending" : "2005-07-01", "value" : 38.0 },
          { "year_ending" : "2006-07-01", "value" : 40.0 },
          { "year_ending" : "2007-07-01", "value" : 42.0 },
          { "year_ending" : "2008-07-01", "value" : 44.0 },
          { "year_ending" : "2009-07-01", "value" : 46.0 },
          { "year_ending" : "2010-07-01", "value" : 48.0 },
          { "year_ending" : "2011-07-01", "value" : 50.0 },
          { "year_ending" : "2012-07-01", "value" : 52.0 },
          { "year_ending" : "2013-07-01", "value" : 54.0 },
          { "year_ending" : "2014-07-01", "value" : 56.0 }
        ],
        "WritingPctMet" : [
          { "year_ending" : "2004-07-01", "value" : 50.0 },
          { "year_ending" : "2005-07-01", "value" : 49.0 },
          { "year_ending" : "2006-07-01", "value" : 48.0 },
          { "year_ending" : "2007-07-01", "value" : 47.0 },
          { "year_ending" : "2008-07-01", "value" : 46.0 },
          { "year_ending" : "2009-07-01", "value" : 46.0 },
          { "year_ending" : "2010-07-01", "value" : 44.0 },
          { "year_ending" : "2011-07-01", "value" : 43.0 },
          { "year_ending" : "2012-07-01", "value" : 42.0 },
          { "year_ending" : "2013-07-01", "value" : 41.0 },
          { "year_ending" : "2014-07-01", "value" : 40.0 }
        ],
        "PctEconomicallyDisadvantaged" : [
          { "year_ending" : "2004-07-01", "value" : 10.0 },
          { "year_ending" : "2005-07-01", "value" : 13.0 },
          { "year_ending" : "2006-07-01", "value" : 16.0 },
          { "year_ending" : "2007-07-01", "value" : 19.0 },
          { "year_ending" : "2008-07-01", "value" : 22.0 },
          { "year_ending" : "2009-07-01", "value" : 25.0 },
          { "year_ending" : "2010-07-01", "value" : 28.0 },
          { "year_ending" : "2011-07-01", "value" : 31.0 },
          { "year_ending" : "2012-07-01", "value" : 34.0 },
          { "year_ending" : "2013-07-01", "value" : 37.0 },
          { "year_ending" : "2014-07-01", "value" : 40.0 }
        ]
      }
    },{
      "id" : 456,
      "name" : "Jefferson Middle",
      "type" : "M",
      "data_series" : {
        "MathPctMet" : [
          { "year_ending" : "2004-07-01", "value" : 95.5 },
          { "year_ending" : "2005-07-01", "value" : 90.5 },
          { "year_ending" : "2006-07-01", "value" : 85.5 },
          { "year_ending" : "2007-07-01", "value" : 80.5 },
          { "year_ending" : "2008-07-01", "value" : 75.5 },
          { "year_ending" : "2009-07-01", "value" : 70.5 },
          { "year_ending" : "2010-07-01", "value" : 65.5 },
          { "year_ending" : "2011-07-01", "value" : 60.5 },
          { "year_ending" : "2012-07-01", "value" : 55.5 },
          { "year_ending" : "2013-07-01", "value" : 50.5 },
          { "year_ending" : "2014-07-01", "value" : 45.5 }
        ],
        "ReadingPctMet" : [
          { "year_ending" : "2004-07-01", "value" : 40.0 },
          { "year_ending" : "2005-07-01", "value" : 39.0 },
          { "year_ending" : "2006-07-01", "value" : 38.0 },
          { "year_ending" : "2007-07-01", "value" : 37.0 },
          { "year_ending" : "2008-07-01", "value" : 36.0 },
          { "year_ending" : "2009-07-01", "value" : 35.0 },
          { "year_ending" : "2010-07-01", "value" : 34.0 },
          { "year_ending" : "2011-07-01", "value" : 33.0 },
          { "year_ending" : "2012-07-01", "value" : 32.0 },
          { "year_ending" : "2013-07-01", "value" : 31.0 },
          { "year_ending" : "2014-07-01", "value" : 30.0 }
        ],
        "WritingPctMet" : [
          { "year_ending" : "2004-07-01", "value" : 60.0 },
          { "year_ending" : "2005-07-01", "value" : 66.0 },
          { "year_ending" : "2006-07-01", "value" : 62.0 },
          { "year_ending" : "2007-07-01", "value" : 58.0 },
          { "year_ending" : "2008-07-01", "value" : 54.0 },
          { "year_ending" : "2009-07-01", "value" : 50.0 },
          { "year_ending" : "2010-07-01", "value" : 46.0 },
          { "year_ending" : "2011-07-01", "value" : 42.0 },
          { "year_ending" : "2012-07-01", "value" : 38.0 },
          { "year_ending" : "2013-07-01", "value" : 34.0 },
          { "year_ending" : "2014-07-01", "value" : 30.0 }
        ],
        "PctEconomicallyDisadvantaged" : [
          { "year_ending" : "2004-07-01", "value" : 90.0 },
          { "year_ending" : "2005-07-01", "value" : 87.0 },
          { "year_ending" : "2006-07-01", "value" : 84.0 },
          { "year_ending" : "2007-07-01", "value" : 81.0 },
          { "year_ending" : "2008-07-01", "value" : 78.0 },
          { "year_ending" : "2009-07-01", "value" : 75.0 },
          { "year_ending" : "2010-07-01", "value" : 72.0 },
          { "year_ending" : "2011-07-01", "value" : 69.0 },
          { "year_ending" : "2012-07-01", "value" : 66.0 },
          { "year_ending" : "2013-07-01", "value" : 63.0 },
          { "year_ending" : "2014-07-01", "value" : 60.0 }
        ]
      }
    }]
  };

  function getDataSeries(schoolIds, callback) {
    $.ajax({
      type: "POST",
      url: "http://52.0.223.139:9200/education/schools/_search",
      dataType: "json",
      data: createQueryForSchools(schoolIds),
      success: function(data) { handleDataSeriesResponse(data, schoolIds, callback); }
    });
    callback(dataSeriesFixtures);
  }

  function createQueryForSchools(schoolIds) {
    return {
      "from" : 0,
      "size" : schoolIds.length * 15,
      "fields" : [
        "SchoolID",
        "YearEnding",
        "SchoolName",
        "SchoolType",
        "SchoolRating",
        "MathPctMet",
        "ReadingPctMet",
        "WritingPctMet",
        "PctEconomicallyDisadvantaged"
      ],
      "_source" : false,
      "query" : {
        "filtered" : {
          "query" : {
            "match_all" : {}
          },
          "filter" : {
            "terms" : {
              "SchoolID" : schoolIds
            }
          }
        }
      },
      "sort" : [
        { "SchoolID" : "asc" },
        { "YearEnding" : "asc" }
      ]
    };
  }

  function handleDataSeriesResponse(data, schoolIds, callback) {
    var hits = data.hits.hits;
    var schoolsById = {};
    for (var i = 0; i < hits.length; i++) {
      var fields = hits[i].fields;
      var schoolId = fields["SchoolID"][0];
      var school;
      if (schoolsById.hasOwnPropery(schoolId)) {
        school = schoolsById[schoolId];
      } else {
        school = {
          "id" : schoolId,
          "name" : fields["SchoolName"][0],
          "type" : fields["SchoolType"][0],
          "data_series" : {
            "MathPctMet" : [],
            "ReadingPctMet" : [],
            "WritingPctMet" : [],
            "PctEconomicallyDisadvantaged" : []
          }
        };
        schoolsById[schoolId] = school;
      }
      var metricNames = [ "MathPctMet", "ReadingPctMet", "WritingPctMet", "PctEconomicallyDisadvantaged" ];
      for (var j = 0; j < metricNames.length; j++) {
        var metricName = metricNames[j];
        school["data_series"][metricName].push({
          "year_ending" : fields["YearEnding"][0],
          "value" : fields[metricName][0]
        });
      }
    }
    for (var id in schoolIds) {
      var school = schoolsById[id];
      schools.push(school);
    }
    callback({ "schools" : schools });
  }

  function getAllSchools() {

  }

  function getSchoolsNear(zip) {

  }

})();
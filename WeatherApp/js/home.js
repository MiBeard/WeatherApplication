
$(document).ready(function () {

    $('#reset').hide();
    $('#submitZip').click(function () {

        $('#enterZipCaption').text('Your results');
        $('#submitZip').hide();
        $('#reset').toggle().click(function () {

            location.reload();

        });

        $('#zipcode').hide();
        $('#unit').hide();

        var zipcode = $('#zipcode').val();
        var unit = $('#unit').val();

        if (zipcode != '' && unit == 3) {
            $.ajax({
                type: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ",us&units=imperial" +
                    "&APPID=84044a34a7f9bdc778f177e2bed6c696",
                success: function (data) {
                    //promise, callback
                    //jQuery.ajax
                    //JSLint
                    //JSHint
                    var formatter = '<p>';
                    var icon = $('#showIcon');
                    var weatherSpec = $('#show');
                    var current = $('#currentConditions');
                    var breaker = $('#lineBreak');

                    var conditionHeader = '<h3>Current Conditions in ' + data.name + '</h3>';
                    var weatherIcon = '<img src=http://openweathermap.org/img/w/' + data.weather[0].icon + '.png>' + data.weather[0].main + ': ' + data.weather[0].description + '</br>';

                    formatter += '<br>';
                    formatter += 'Current Temperature: ' + data.main.temp + '&deg;F' + '<br/>';
                    formatter += 'Wind: ' + data.wind.speed + ' miles/hour' + '<br/>';
                    formatter += 'Humidity: ' + data.main.humidity + '<br/>';
                    formatter += '</p>';

                    var pageBreak = '<hr/>';

                    current.append(conditionHeader);
                    icon.append(weatherIcon);
                    weatherSpec.append(formatter);
                    breaker.append(pageBreak);

                }
            });

            $.ajax({
                type: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/forecast?zip=' + zipcode + ",us" +
                    "&APPID=84044a34a7f9bdc778f177e2bed6c696&units=imperial",

                success: function (forecastData) {

                    var forecastFormat = '<p>';
                    var header = $('#fiveDayHeader');
                    var day1 = $('#day1');
                    var iconDayOne = $('#iconDay1');
                    var minMax = $('#minMax1');

                    var fiveDayHeader = '<h3>Five Day Forecast for ' + forecastData.city.name + '</h3></br>';
                    header.append(fiveDayHeader);

                    forecastFormat += forecastData.list[0].dt + '</br>';
                    var dayOneIcon = '<img src=http://openweathermap.org/img/w/' + forecastData.list[0].weather[0].icon + '.png>' + '</br>';
                    var minMaxOne = 'H ' + forecastData.list[0].main.temp_max + '&deg;F L ' + forecastData.list[0].main.temp_min + '&deg;F</br>';
                    forecastFormat += '</p>';

                    console.log(minMaxOne);

                    day1.append(forecastFormat);
                    iconDayOne.append(dayOneIcon);
                    minMax.append(minMaxOne);


                    var forecastFormat = '<p>';
                    var day2 = $('#day2');
                    var iconDayTwo = $('#day2');
                    minMax = $('#minMax2');

                    forecastFormat += forecastData.list[1].dt + '</br>';
                    var dayTwoIcon = '<img src=http://openweathermap.org/img/w/' + forecastData.list[6].weather[0].icon + '.png>' + '</br>';
                    var minMaxtwo = 'H ' + forecastData.list[1].main.temp_max + '&deg;F L ' + forecastData.list[1].main.temp_min + '&deg;F</br>';
                    forecastFormat += '</p>';

                    day2.append(forecastFormat);
                    iconDayTwo.append(dayTwoIcon);
                    minMax.append(minMaxtwo);



                    var forecastFormat = '<p>';
                    var day3 = $('#day3');
                    var iconDayThree = $('#day3');
                    minMax = $('#minMax3');

                    forecastFormat += forecastData.list[2].dt + '</br>';
                    var dayThreeIcon = '<img src=http://openweathermap.org/img/w/' + forecastData.list[13].weather[0].icon + '.png>' + '</br>';
                    var minMaxThree = 'H ' + forecastData.list[2].main.temp_max + '&deg;F L ' + forecastData.list[2].main.temp_min + '&deg;F</br>';
                    forecastFormat += '</p>';

                    day3.append(forecastFormat);
                    iconDayThree.append(dayThreeIcon);
                    minMax.append(minMaxThree);


                    var forecastFormat = '<p>';
                    var day4 = $('#day4');
                    var iconDayFour = $('#day4');
                    minMax = $('#minMax4');

                    forecastFormat += forecastData.list[3].dt + '</br>';
                    var dayFourIcon = '<img src=http://openweathermap.org/img/w/' + forecastData.list[20].weather[0].icon + '.png>' + '</br>';
                    var minMaxFour = 'H ' + forecastData.list[3].main.temp_max + '&deg;F L ' + forecastData.list[3].main.temp_min + '&deg;F</br>';
                    forecastFormat += '</p>';

                    day4.append(forecastFormat);
                    iconDayFour.append(dayFourIcon);
                    minMax.append(minMaxFour);



                    var forecastFormat = '<p>';
                    var day5 = $('#day5');
                    var iconDayFive = $('#day5');
                    minMax = $('#minMax5');

                    forecastFormat += forecastData.list[4].dt + '</br>';
                    var dayFiveIcon = '<img src=http://openweathermap.org/img/w/' + forecastData.list[27].weather[0].icon + '.png>' + '</br>';
                    var minMaxFive = 'H ' + forecastData.list[4].main.temp_max + '&deg;F L ' + forecastData.list[4].main.temp_min + '&deg;F</br>';
                    forecastFormat += '</p>';

                    day5.append(forecastFormat);
                    iconDayFive.append(dayFiveIcon);
                    minMax.append(minMaxFive);


                }
            });

            $('#zipcode').val('');
            $('#unit').val(1);


        } else if (zipcode != '' && unit == 2) {
            $.ajax({
                type: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ",us&units=metric" +
                    "&APPID=84044a34a7f9bdc778f177e2bed6c696&units=metric",
                success: function (metricData) {
                    var formatter = '<p>';
                    var icon = $('#showIcon');
                    var weatherSpec = $('#show');
                    var current = $('#currentConditions');
                    var breaker = $('#lineBreak');

                    var conditionHeader = '<h3>Current Conditions in ' + metricData.name + '</h3>';
                    var weatherIcon = '<img src=http://openweathermap.org/img/w/' + metricData.weather[0].icon + '.png>' + metricData.weather[0].main + ': ' + metricData.weather[0].description + '</br>';

                    formatter += '<br>';
                    formatter += 'Current Temperature: ' + metricData.main.temp + '&deg;F' + '<br/>';
                    formatter += 'Wind: ' + metricData.wind.speed + ' miles/hour' + '<br/>';
                    formatter += 'Humidity: ' + metricData.main.humidity + '<br/>';
                    formatter += '</p>';

                    var pageBreak = '<hr/>';

                    current.append(conditionHeader);
                    icon.append(weatherIcon);
                    weatherSpec.append(formatter);
                    breaker.append(pageBreak);

                }
            });

            $.ajax({
                type: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/forecast?zip=' + zipcode + ",us" +
                    "&APPID=84044a34a7f9bdc778f177e2bed6c696&units=metric",

                success: function (forecastData) {

                    var forecastFormat = '<p>';
                    var header = $('#fiveDayHeader');
                    var day1 = $('#day1');
                    var iconDayOne = $('#iconDay1');
                    var minMax = $('#minMax1');

                    var fiveDayHeader = '<h3>Five Day Forecast for ' + forecastData.city.name + '</h3></br>';
                    header.append(fiveDayHeader);

                    forecastFormat += forecastData.list[0].dt + '</br>';
                    var dayOneIcon = '<img src=http://openweathermap.org/img/w/' + forecastData.list[0].weather[0].icon + '.png>' + '</br>';
                    var minMaxOne = 'H ' + forecastData.list[0].main.temp_max + '&deg;F L ' + forecastData.list[0].main.temp_min + '&deg;F</br>';
                    forecastFormat += '</p>';

                    day1.append(forecastFormat);
                    iconDayOne.append(dayOneIcon);
                    minMax.append(minMaxOne);


                    var forecastFormat = '<p>';
                    var day2 = $('#day2');
                    var iconDayTwo = $('#day2');
                    minMax = $('#minMax2');

                    forecastFormat += forecastData.list[1].dt + '</br>';
                    var dayTwoIcon = '<img src=http://openweathermap.org/img/w/' + forecastData.list[6].weather[0].icon + '.png>' + '</br>';
                    var minMaxtwo = 'H ' + forecastData.list[1].main.temp_max + '&deg;F L ' + forecastData.list[1].main.temp_min + '&deg;F</br>';
                    forecastFormat += '</p>';

                    day2.append(forecastFormat);
                    iconDayTwo.append(dayTwoIcon);
                    minMax.append(minMaxtwo);



                    var forecastFormat = '<p>';
                    var day3 = $('#day3');
                    var iconDayThree = $('#day3');
                    minMax = $('#minMax3');

                    forecastFormat += forecastData.list[2].dt + '</br>';
                    var dayThreeIcon = '<img src=http://openweathermap.org/img/w/' + forecastData.list[13].weather[0].icon + '.png>' + '</br>';
                    var minMaxThree = 'H ' + forecastData.list[2].main.temp_max + '&deg;F L ' + forecastData.list[2].main.temp_min + '&deg;F</br>';
                    forecastFormat += '</p>';

                    day3.append(forecastFormat);
                    iconDayThree.append(dayThreeIcon);
                    minMax.append(minMaxThree);


                    var forecastFormat = '<p>';
                    var day4 = $('#day4');
                    var iconDayFour = $('#day4');
                    minMax = $('#minMax4');

                    forecastFormat += forecastData.list[3].dt + '</br>';
                    var dayFourIcon = '<img src=http://openweathermap.org/img/w/' + forecastData.list[20].weather[0].icon + '.png>' + '</br>';
                    var minMaxFour = 'H ' + forecastData.list[3].main.temp_max + '&deg;F L ' + forecastData.list[3].main.temp_min + '&deg;F</br>';
                    forecastFormat += '</p>';

                    day4.append(forecastFormat);
                    iconDayFour.append(dayFourIcon);
                    minMax.append(minMaxFour);



                    var forecastFormat = '<p>';
                    var day5 = $('#day5');
                    var iconDayFive = $('#day5');
                    minMax = $('#minMax5');

                    forecastFormat += forecastData.list[4].dt + '</br>';
                    var dayFiveIcon = '<img src=http://openweathermap.org/img/w/' + forecastData.list[27].weather[0].icon + '.png>' + '</br>';
                    var minMaxFive = 'H ' + forecastData.list[4].main.temp_max + '&deg;F L ' + forecastData.list[4].main.temp_min + '&deg;F</br>';
                    forecastFormat += '</p>';

                    day5.append(forecastFormat);
                    iconDayFive.append(dayFiveIcon);
                    minMax.append(minMaxFive);
                }
            });

            $('#zipcode').val('');
            $('#unit').val(1);

        } else {
            alert('Field cannot be empty');
        }

    });

});



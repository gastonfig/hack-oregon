var chart = c3.generate({
    data: {
        columns: [
            ['Menlo Park', 84.1, 78.4, 78, 77.8],
            ['Ventura Park', 78.1, 62.4, 59.5, 60.8]
        ]
    },

    axis: {
    	x: {
    		type: 'category',
    		categories: ['Reading Pct Met 2010-11', 'Reading Pct Met 2011-12', 'Reading Pct Met 2012-13', 'Reading Pct Met 2013-14']
    	}
    },
    size: {
    	height: 240,
    	width: 480
    }
});


var reading = c3.generate({
    data: {
        columns: [
            ['Menlo Park', 84.1, 78.4, 78, 77.8],
            ['Ventura Park', 78.1, 62.4, 59.5, 60.8]
        ]
    },

    axis: {
    	x: {
    		type: 'category',
    		categories: ['Reading Pct Met 2010-11', 'Reading Pct Met 2011-12', 'Reading Pct Met 2012-13', 'Reading Pct Met 2013-14']
    	}
    },
    bindto: '#reading-chart',
    size: {
    	height: 240,
    	width: 480
    }
});


var math = c3.generate({
    data: {
        columns: [
            ['Menlo Park', 84.1, 78.4, 78, 77.8],
            ['Ventura Park', 78.1, 62.4, 59.5, 60.8]
        ]
    },

    axis: {
    	x: {
    		type: 'category',
    		categories: ['Reading Pct Met 2010-11', 'Reading Pct Met 2011-12', 'Reading Pct Met 2012-13', 'Reading Pct Met 2013-14']
    	}
    },
    bindto: '#math-chart',
    size: {
    	height: 240,
    	width: 480
    }
});
(function() {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <style>
#chart {
    border: 1px solid #000;
    padding: 10px;
    margin: 10px;
    width: 100%; 
    max-width: 95%; 
    height: 500px;  
    overflow: hidden; 
    box-sizing: border-box;  
}
  #image-container {
            width: 100%;
            height: 100px;
            background:url('data:image/png;base64,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') no-repeat center center;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
    </style>
     <div id="image-container"> <svg width="750" height="100">  </svg></div> 
    <div id="chart"></div>
    <a href="https://www.google.com/" target="_blank" class="follow-link">Link</a>
    `;

    class GanttChartWidget extends HTMLElement {
        constructor() {
            super();
            console.log('Constructor called');
            this._shadowRoot = this.attachShadow({mode: 'open'});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._props = {};
            this.tasks = [];

            // Load DHTMLX Gantt CSS
            const dhtmlxGanttCSS = document.createElement('link');
            dhtmlxGanttCSS.rel = 'stylesheet';
            dhtmlxGanttCSS.href = 'https://cdn.dhtmlx.com/gantt/edge/dhtmlxgantt.css';
            this._shadowRoot.appendChild(dhtmlxGanttCSS);

            // Load DHTMLX Gantt
            const dhtmlxGanttScript = document.createElement('script');
            dhtmlxGanttScript.src = 'https://cdn.dhtmlx.com/gantt/edge/dhtmlxgantt.js';
            dhtmlxGanttScript.onload = () => {
                this._dhtmlxGanttReady = true;
                this._renderChart();
            };
            this._shadowRoot.appendChild(dhtmlxGanttScript);
        }






        // GanttChart methods
        static get metadata() {
            console.log('metadata called');
            return {
                properties: {
                    myDataBinding: {
                        type: "object",
                        defaultValue: {}
                    },
                }
            };
        }

        onCustomWidgetBeforeUpdate(changedProperties) {
            console.log('onCustomWidgetBeforeUpdate called');
            this._props = { ...this._props, ...changedProperties };
        }

        onCustomWidgetAfterUpdate(changedProperties) {
            console.log('onCustomWidgetAfterUpdate called');
            if ("myDataBinding" in changedProperties) {
                const dataBinding = changedProperties.myDataBinding;
                if (dataBinding.state === 'success') {
                    this._updateData(dataBinding);
                }
            }
        }

_updateData(dataBinding) {
    console.log('_updateData called');
    if (dataBinding && Array.isArray(dataBinding.data)) {
        this.tasks = dataBinding.data.map((row, index) => {
            if (row.dimensions_0 && row.dimensions_1 && row.dimensions_2 && row.dimensions_3) {
  
                
                console.log('original startDate:', row.dimensions_2.id , 'endDate:', row.dimensions_3.id);  // Log the start and end dates
             console.log('the rest measure:', row.measures_0.raw, 'the rest dim', row.dimensions_4.id );  // Log the start and end dates
                
   const startDate = new Date(row.dimensions_2.id);
const endDate = new Date(row.dimensions_3.id);

                console.log('original startDate:', startDate, 'endDate:', endDate);  // Log the start and end dates
       
                // Check if startDate and endDate are valid dates
                if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
                    console.error('Invalid date:', row.dimensions_2.id, row.dimensions_3.id);
                    return null;
                }
                // Check if startDate is before endDate
                if (startDate > endDate) {
                    console.error('Start date is after end date:', startDate, endDate);
                    return null;
                }
                console.log('startDate:', startDate, 'endDate:', endDate);  // Log the start and end dates
                return {
                    id: row.dimensions_0.label,  // Unique id of task
                    text: row.dimensions_1.label,  // Name of task
                    start_date: startDate,  // Start date of task
                    end_date: endDate,  // End date of task
                    progress: row.measures_0.raw,  // Progress of task in percent
                    open: row.dimensions_4.id  // Task is open by default
                };
            }
        }).filter(Boolean);  // Filter out any null values

        // Check if all tasks have valid start and end dates
        for (let task of this.tasks) {
            if (!task.start_date || !task.end_date) {
                console.error('Task with null start or end date:', task);
            }
        }

        console.log('Tasks:', this.tasks);  // Log the tasks

        this._renderChart();
    }
}


_renderChart() {
    console.log('_renderChart called');
    if (this._dhtmlxGanttReady) {
        const chartElement = this._shadowRoot.getElementById('chart');


     // Set fit_tasks to false to enable horizontal scrolling
        gantt.config.fit_tasks = true;
         // Configure the Gantt chart to use a monthly scale
        gantt.config.scale_unit = "month";
        gantt.config.step = 1;
        
        // Initialize the Gantt chart
        gantt.init(chartElement);


        // Load the tasks into the Gantt chart
        gantt.parse({ data: this.tasks });

        console.log('Gantt chart rendered');
    }
}






    }

    customElements.define('gantt-chart-widget', GanttChartWidget);
})();

import htm from 'https://unpkg.com/htm?module';
import format from 'https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module';

const html = htm.bind(h);

// Preview component for a Experience
const Experience = createClass({
  render() {
    const entry = this.props.entry;
    const options = { month: "short", 
                      year: "numeric"};
    const startDate = new Intl.DateTimeFormat("en-US", options).format(entry.getIn(['data', 'startdate']));
    const endDate = new Intl.DateTimeFormat("en-US", options).format(entry.getIn(['data', 'enddate']));
    console.log(startDate);
    return html`
      <div class="page-container">
        <h1>
          <span class="project-card__emoji">${entry.getIn(['data', 'emoji'], null)}</span>
          ${entry.getIn(['data', 'organization'], null)}
        </h1>
        <h2>
          ${entry.getIn(['data', 'role'], null)}
        </h2>
         <p>${startDate}-${!!(entry.getIn(['data', 'isCurrent'], null))?'Present':endDate}</p>
         <p> ${entry.getIn(['data', 'location'], null)}</p>
        <hr/>
        ${this.props.widgetFor('body')}

        <nav>
          <a href="#">← View All Experiences</a>
        </nav>
      </div>
    `;
  },
});

export default Experience;

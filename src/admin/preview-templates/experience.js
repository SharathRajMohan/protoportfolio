import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// Preview component for Experience Page
const Experience = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <h1>${entry.getIn(['data', 'title'], null)}</h1>
        <p>${entry.getIn(['data', 'subtitle'], null)}</p>
        <p>ExpTest</p>
        <hr/>

        ${this.props.widgetFor('body')}
      </main>
    `;
  },
});

export default Experience;
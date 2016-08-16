import React, {Component} from 'react';
import Button from '../common/Button';

class Dashboard extends Component {
  render() {
    let deleteBtn;
    const {onRemoveClick, index, scenario, showDeleteBtn} = {...this.props};
    const indicator = {
      slug: 'avg-precipitation',
      title: 'Avg Precipitation (mm/month)',
      categorySlug: 'climate'
    };

    if (showDeleteBtn) {
      deleteBtn = (
        <Button
          onAddClick={function() {
            onRemoveClick(index);
          }}
          icon="close"
          style="light"
          size="small"
          />
      );
    }
    const legendConfig = {
      climate: [{color: '#d6faec', value: 0},
                {color: '#cff1e1', value: 0.2},
                {color: '#dde133', value: 0.4},
                {color: '#e5cf19', value: 0.6},
                {color: '#a4c504', value: 0.8},
                {color: '#268434', value: 1}],
      biodiversity: [{color: '#d2ecfb', value: 0},
                {color: '#b3ecdd', value: 0.2},
                {color: '#5faacf', value: 0.4},
                {color: '#4084cd', value: 0.6},
                {color: '#4963b8', value: 0.8},
                {color: '#383e9c', value: 1}]
    };
    return (
      <div className="c-dashboard">
        <div className="dashboard-control">
          <div className="scenario">
            {scenario}
            <Button onClick={() => this.props.onSetMapModal(true)} icon="settings" style="none" size="small"/>
          </div>
          {deleteBtn}
        </div>
        <div className="dashboard-legend">
          <h4>{indicator.categorySlug}</h4>
          <span>{indicator.title}</span>
          <div className="scale">
            <ul className="labels">
              {legendConfig[indicator.categorySlug].map((element, index) =>
                <li key={`legend-item-${index}`}>
                  <span style={{backgroundColor: element.color}}></span>
                  {element.value}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="dashboard-model">
          <label className="control control--checkbox">Climate
            <input type="checkbox" name="model" value="Model 1"/>
            <div className="control--indicator"></div>
          </label>
          <label className="control control--checkbox">Biodiversity
            <input type="checkbox" name="model" value="Model 2"/>
            <div className="control--indicator"></div>
          </label>
          <label className="control control--checkbox">Precipitation
            <input type="checkbox" name="model" value="Model 2"/>
            <div className="control--indicator"></div>
          </label>
        </div>
      </div>
   );
  }
}

Dashboard.propTypes = {
  place: React.PropTypes.array,
  id: React.PropTypes.string,
  index: React.PropTypes.number,
  scenario: React.PropTypes.string,
  showDeleteBtn: React.PropTypes.bool,
  onRemoveClick: React.PropTypes.func,
  onMapDrag: React.PropTypes.func
};

export default Dashboard;

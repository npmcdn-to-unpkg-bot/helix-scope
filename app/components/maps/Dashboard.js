import React, {Component} from 'react';
import Button from '../common/Button';

class Dashboard extends Component {
  render() {
    let deleteBtn;
    const {onRemoveClick, index, scenario, indicator, showDeleteBtn} = {...this.props};
    if (showDeleteBtn) {
      deleteBtn = (
        <Button
          onAddClick={function() {
            onRemoveClick(index);
          }}
          icon="close"
          style="light"
          size="small"
          link=""
          />
      );
    }
    return (
      <div className="c-dashboard">
        <div className="dashboard-control">
          {scenario}
          <Button link="" icon="settings" style="none" size="small"/>
          {deleteBtn}
        </div>
        <div className="dashboard-filter">
          <h4>{indicator.categorySlug}</h4>
          <span>{indicator.title}</span>
          <div className="legend">
            Some legend
          </div>
        </div>
        <div className="dashboard-model">
          <form action="" >
            <label>
              <input type="checkbox" name="model" value="Model 1"/>
              Model 1
            </label>
            <label>
              <input type="checkbox" name="model" value="Model 2"/>
              Model 2
            </label>
            <label>
              <input type="checkbox" name="model" value="Model 2"/>
              Model 3
            </label>
          </form>
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
  indicator: React.PropTypes.object,
  showDeleteBtn: React.PropTypes.bool,
  onRemoveClick: React.PropTypes.func,
  onMapDrag: React.PropTypes.func
};

export default Dashboard;

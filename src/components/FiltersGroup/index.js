import { BsSearch } from "react-icons/bs"

import ProfileDetails from "../ProfileDetails"
import "./index.css"

const FiltersGroup = (props) => {
  const onChangeSearchInput = (event) => {
    const { changeSearchInput } = props
    changeSearchInput(event)
  }

  const onEnterSearchInput = (event) => {
    const { getJobs } = props
    if (event.key === "Enter") {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    const { getJobs, searchInput } = props

    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          type="button"
          id="searchButton"
          className="search-button-container"
          onClick={getJobs}
        >
          i
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderTypeOfEmployment = () => {
    const { employmentTypesList } = props

    return (
      <div className="employment-type-coontainer">
        <h1 className="employment-type-heading">Type of Employment</h1>
        <ul className="employee-type-list-container">
          {employmentTypesList.map((eachEmployeeType) => {
            const { changeEmployeeList } = props
            const onSelectEmployeeType = (event) => {
              changeEmployeeList(event.target.value)
            }

            return (
              <li
                className="employee-item"
                key={eachEmployeeType.employmentTypeId}
                onChange={onSelectEmployeeType}
              >
                <input
                  type="checkbox"
                  id={eachEmployeeType.employmentTypeId}
                  className="check-input"
                  value={eachEmployeeType.employmentTypeId}
                />

                <label
                  htmlFor={eachEmployeeType.employmentTypeId}
                  className="check-label"
                >
                  {eachEmployeeType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const { salaryRangesList } = props
    return (
      <div className="salary-range-container">
        <h1 className="salary-range-heading">Salary Range</h1>
        <ul className="salary-range-list-container">
          {salaryRangesList.map((eachItem) => {
            const { changeSalary } = props
            const onClickSalary = () => {
              changeSalary(eachItem.salaryRangeId)
            }

            return (
              <li
                className="salary-item"
                key={eachItem.salaryRangeId}
                onClick={onClickSalary}
              >
                <input
                  type="radio"
                  id={eachItem.salaryRangeId}
                  name="salary"
                  className="check-input"
                />
                <label htmlFor={eachItem.salaryRangeId} className="check-label">
                  {eachItem.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderTypeOfEmployment()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup
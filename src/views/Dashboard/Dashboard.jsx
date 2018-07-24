import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from "reactstrap";
// react plugin used to create charts
import { Line, Pie, Bar, HorizontalBar } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

import {
  PanelHeader,
  Stats,
  Statistics,
  CardCategory,
  Progress
} from "components";

import {
  dashboardPanelChart,
  dashboardActiveUsersChart,
  dashboardSummerChart,
  dashboardActiveCountriesCard
} from "variables/charts.jsx";

import jacket from "assets/img/saint-laurent.jpg";
import shirt from "assets/img/balmain.jpg";
import swim from "assets/img/prada.jpg";

import { table_data } from "variables/general.jsx";

class Dashboard extends React.Component {
  createTableData() {
    var tableRows = [];
    for (var i = 0; i < table_data.length; i++) {
      tableRows.push(
        <tr key={i}>
          {/* <td>
            <div className="flag">
              <img src={table_data[i].flag} alt="us_flag" />
            </div>
          </td> */}
          <td>{table_data[i].city}</td>
          <td className="text-right">{table_data[i].count}</td>
          <td className="text-right">{table_data[i].percentage}</td>
        </tr>
      );
    }
    return tableRows;
  }
  render() {
    return (
      <div>
        <PanelHeader
          size="lg"
          content={
            <Line
              data={dashboardPanelChart.data}
              options={dashboardPanelChart.options}
            />
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <Card className="card-stats card-raised">
                <CardBody>
                  <Row>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="info"
                        icon="users_single-02"
                        title="20,859"
                        subtitle="ACTIVATION"
                      />
                    </Col>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="success"
                        icon="business_money-coins"
                        title={
                          <span>
                            <small>$</small>153,797,500
                          </span>
                        }
                        subtitle="REVENUE"
                      />
                    </Col>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="primary"
                        icon="shopping_cart-simple"
                        title="562"
                        subtitle="TICKETS SOLD"
                      />
                    </Col>
                    <Col xs={12} md={3}>
                      <Statistics
                        iconState="danger"
                        icon="education_glasses"
                        title="7,353"
                        subtitle="VIEW"
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>

            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Age Rate</CardCategory>
                  {/* <CardTitle tag="h2">55,300</CardTitle> */}
                  {/* <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </CardHeader>
                <CardBody>
                  <div className="chart-area-pie">
                    <Pie
                      data={dashboardSummerChart.data}
                      options={dashboardSummerChart.options}
                    />
                  </div>
                  {/* <div className="card-progress">
                    <Progress badge="Delivery Rate" value="90" />
                    <Progress color="success" badge="Open Rate" value="60" />
                    <Progress color="info" badge="Click Rate" value="12" />
                    <Progress color="primary" badge="Hard Bounce" value="5" />
                    <Progress color="danger" badge="Spam Report" value="0.11" />
                  </div> */}
                  <Table responsive >
                    <tbody>

                      <tr key={0}>
                        <td>
                          <div className="flag" style={{ background: '#E8F225', width: '30px', height: '20px' }}>

                          </div>
                        </td>
                        <td>{'10-20'}</td>
                        <td className="text-right">818</td>
                        <td className="text-right">57.57%</td>
                      </tr>
                      <tr key={1}>
                        <td>
                          <div className="flag" style={{ background: '#F24D25', width: '30px', height: '20px' }}>
                          </div>
                        </td>
                        <td>{'20-30'}</td>
                        <td className="text-right">982</td>
                        <td className="text-right">12.43%</td>
                      </tr>
                      <tr key={2}>
                        <td>
                          <div className="flag" style={{ background: '#872193', width: '30px', height: '20px' }}>

                          </div>
                        </td>
                        <td>{'30-40'}</td>
                        <td className="text-right">1.693</td>
                        <td className="text-right">20.12%</td>
                      </tr>
                      <tr key={3}>
                        <td>
                          <div className="flag" style={{ background: '#2F8AD3', width: '30px', height: '20px' }}>

                          </div>
                        </td>
                        <td>{'40-50'}</td>
                        <td className="text-right">1526</td>
                        <td className="text-right">12.74%</td>
                      </tr>
                      <tr key={4}>
                        <td>
                          <div className="flag" style={{ background: '#429321', width: '30px', height: '20px' }}>

                          </div>
                        </td>
                        <td>{'50+'}</td>
                        <td className="text-right">1.526</td>
                        <td className="text-right">4.90%</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
                {/* <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter> */}
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Location Rate</CardCategory>
                  {/* <CardTitle tag="h2">34,252</CardTitle> */}
                  {/* <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardActiveUsersChart.data}
                      options={dashboardActiveUsersChart.options}
                    />
                  </div>
                  <Table responsive >
                    <tbody>{this.createTableData()}</tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Gender Rate</CardCategory>
                </CardHeader>
                <CardBody>
                  <div className="chart-area-stack">
                    <HorizontalBar
                      data={dashboardActiveCountriesCard.data}
                      options={dashboardActiveCountriesCard.options}
                    />
                  </div>
                  <Table responsive>
                    <tbody>

                      <tr key={0}>
                        <td>
                          <div className="flag" style={{ background: '#C8E8FF', width: '30px', height: '20px' }}>
                          </div>
                        </td>
                        <td>{'Male'}</td>
                        <td className="text-right">70.920</td>
                        <td className="text-right">67.57%</td>
                      </tr>
                      <tr key={1}>
                        <td>
                          <div className="flag" style={{ background: '#FFBCC2', width: '30px', height: '20px' }}>
                          </div>
                        </td>
                        <td>{'Female'}</td>
                        <td className="text-right">51.300</td>
                        <td className="text-right">32.43%</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
                {/* <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons ui-2_time-alarm", t: "Last 7 days" }]}
                  </Stats>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>

          <Row>

            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Ticket Status</CardCategory>
                  {/* <CardTitle tag="h2">55,300</CardTitle> */}
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  {/* <div className="chart-area">
                    <Pie
                      data={dashboardSummerChart.data}
                      options={dashboardSummerChart.options}
                    />
                  </div> */}
                  <div className="card-progress">
                    <Progress badge="CONVERSION RATE" value="16" />
                    <Progress color="success" badge="ACTIVATION RATE" value="60" />
                  </div>
                </CardBody>
                {/* <CardFooter>
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons arrows-1_refresh-69",
                        t: "Just Updated"
                      }
                    ]}
                  </Stats>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col xs={12} md={12}>
              <Card>
                <CardHeader>
                  <CardTitle>Best Selling Products</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive className="table-shopping">
                    <thead>
                      <tr>
                        <th className="text-center" />
                        <th>PRODUCT</th>
                        <th>COLOR</th>
                        <th>Size</th>
                        <th className="text-right">PRICE</th>
                        <th className="text-right">QTY</th>
                        <th className="text-right">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={jacket} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#jacket">Suede Biker Jacket</a>
                          <br />
                          <small>by Saint Laurent</small>
                        </td>
                        <td>Black</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>3,390
                        </td>
                        <td className="td-number">1</td>
                        <td className="td-number">
                          <small>€</small>549
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={shirt} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#shirt">Jersey T-Shirt</a>
                          <br />
                          <small>by Balmain</small>
                        </td>
                        <td>Black</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>499
                        </td>
                        <td className="td-number">2</td>
                        <td className="td-number">
                          <small>€</small>998
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img src={swim} alt="..." />
                          </div>
                        </td>
                        <td className="td-name">
                          <a href="#pants">Slim-Fit Swim Short </a>
                          <br />
                          <small>by Prada</small>
                        </td>
                        <td>Red</td>
                        <td>M</td>
                        <td className="td-number">
                          <small>€</small>200
                        </td>
                        <td className="td-number">3</td>
                        <td className="td-number">
                          <small>€</small>799
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5" />
                        <td className="td-total">Total</td>
                        <td className="td-price">
                          <small>€</small>2,346
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;

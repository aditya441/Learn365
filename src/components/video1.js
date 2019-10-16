import React, { Component } from "react";
import { Link } from "react-router-dom";

class Video1 extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    progress: 1
  };
  render() {
    return (
        <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h4>Sections</h4>
            <h5>progress: {this.state.progress} / 5</h5>
          </div>
          <ol class="index--contents-list--33vHB">
            <li
              id="contents-list-scroll-target-60754214980923"
              class="_item--item-selected--3LMMf"
            >
              <a title="1. Course Introduction" href="/Course">
                <span class="_item--waypoint-check--nmzcM">
                  <i
                    class="vds-icon vds-icon--sm"
                    role="img"
                    aria-hidden="true"
                  >
                    {/* <svg viewBox="0 0 32 32">
                      <path
                        d="M7.707 17.093a1 1 0 0 0-1.414 1.414l7.2 7.2a1 1 0 0 0 1.564-.192l10.8-18a1 1 0 1 0-1.714-1.03L14 23.388l-6.294-6.294z"
                        fill-rule="nonzero"
                      ></path>
                    </svg> */}
                  </i>
                </span>{" "}
                Course Introduction
              </a>
            </li>
            <li
              id="contents-list-scroll-target-59521068840923"
              class="_item--item--dTIux"
            >
              <a
                title=" Callbacks vs Promises"
                href="/Coursess"
              >
                <span class="_item--waypoint-check--nmzcM">
                  <i
                    class="vds-icon vds-icon--sm"
                    role="img"
                    aria-hidden="true"
                  >
                    {/* <svg viewBox="0 0 32 32">
                      <path
                        d="M7.707 17.093a1 1 0 0 0-1.414 1.414l7.2 7.2a1 1 0 0 0 1.564-.192l10.8-18a1 1 0 1 0-1.714-1.03L14 23.388l-6.294-6.294z"
                        fill-rule="nonzero"
                      ></path>
                    </svg> */}
                  </i>
                </span>{" "}
                Callbacks vs Promises
              </a>
            </li>
            <li
              id="contents-list-scroll-target-60459332750923"
              class="_item--item--dTIux"
            >
              <a title="3. Callbacks vs Thens" href="/courseId/Sections">
                <span class="_item--waypoint-check--nmzcM">
                  <i
                    class="vds-icon vds-icon--sm"
                    role="img"
                    aria-hidden="true"
                  >
                    {/* <svg viewBox="0 0 32 32">
                      <path
                        d="M7.707 17.093a1 1 0 0 0-1.414 1.414l7.2 7.2a1 1 0 0 0 1.564-.192l10.8-18a1 1 0 1 0-1.714-1.03L14 23.388l-6.294-6.294z"
                        fill-rule="nonzero"
                      ></path>
                    </svg> */}
                  </i>
                </span>{" "}
                Callbacks vs Thens
              </a>
            </li>
            <li
              id="contents-list-scroll-target-61097288570923"
              class="_item--item--dTIux"
            >
              <a title="4. Course Map" href="/courseId/Sections">
                <span class="_item--waypoint-check--nmzcM">
                  <i
                    class="vds-icon vds-icon--sm"
                    role="img"
                    aria-hidden="true"
                  >
                    {/* <svg viewBox="0 0 32 32">
                      <path
                        d="M7.707 17.093a1 1 0 0 0-1.414 1.414l7.2 7.2a1 1 0 0 0 1.564-.192l10.8-18a1 1 0 1 0-1.714-1.03L14 23.388l-6.294-6.294z"
                        fill-rule="nonzero"
                      ></path>
                    </svg> */}
                  </i>
                </span>{" "}
                Course Map
              </a>
            </li>
            <li
              id="contents-list-scroll-target-60918604440923"
              class="_item--item--dTIux"
            >
              <a title="5. Promise Timeline" href="/courseId/Sections">
                <span class="_item--waypoint-check--nmzcM">
                  <i
                    class="vds-icon vds-icon--sm"
                    role="img"
                    aria-hidden="true"
                  >
                    {/* <svg viewBox="0 0 32 32">
                      <path
                        d="M7.707 17.093a1 1 0 0 0-1.414 1.414l7.2 7.2a1 1 0 0 0 1.564-.192l10.8-18a1 1 0 1 0-1.714-1.03L14 23.388l-6.294-6.294z"
                        fill-rule="nonzero"
                      ></path>
                    </svg> */}
                  </i>
                </span>{" "}
                Promise Timeline
              </a>
            </li>
            <li
              id="contents-list-scroll-target-5022a139-7fe8-415d-a030-c608eb21a46c"
              class="_item--item--dTIux"
            >
              <a title="6. Async Scenarios" href="/courseId/Sections">
                <span class="_item--waypoint-check--nmzcM">
                  <i
                    class="vds-icon vds-icon--sm"
                    role="img"
                    aria-hidden="true"
                  >
                    {/* <svg viewBox="0 0 32 32">
                      <path
                        d="M7.707 17.093a1 1 0 0 0-1.414 1.414l7.2 7.2a1 1 0 0 0 1.564-.192l10.8-18a1 1 0 1 0-1.714-1.03L14 23.388l-6.294-6.294z"
                        fill-rule="nonzero"
                      ></path>
                    </svg> */}
                  </i>
                </span>{" "}
                Async Scenarios
              </a>
            </li>
            <li
              id="contents-list-scroll-target-61045985370923"
              class="_item--item--dTIux"
            >
              <a title="7. Syntax" href="/courseId/Sections">
                <span class="_item--waypoint-check--nmzcM">
                  <i
                    class="vds-icon vds-icon--sm"
                    role="img"
                    aria-hidden="true"
                  >
                    {/* <svg viewBox="0 0 32 32">
                      <path
                        d="M7.707 17.093a1 1 0 0 0-1.414 1.414l7.2 7.2a1 1 0 0 0 1.564-.192l10.8-18a1 1 0 1 0-1.714-1.03L14 23.388l-6.294-6.294z"
                        fill-rule="nonzero"
                      ></path>
                    </svg> */}
                  </i>
                </span>{" "}
                Syntax
              </a>
            </li>
            <li
              id="contents-list-scroll-target-4592cb5d-dabb-40bc-bbe7-366c6ecf2c3b"
              class="_item--item--dTIux"
            >
              <a title="8. Write Your First Promise" href="/courseId/Sections">
                <span class="_item--waypoint-check--nmzcM">
                  <i
                    class="vds-icon vds-icon--sm"
                    role="img"
                    aria-hidden="true"
                  >
                    {/* <svg viewBox="0 0 32 32">
                      <path
                        d="M7.707 17.093a1 1 0 0 0-1.414 1.414l7.2 7.2a1 1 0 0 0 1.564-.192l10.8-18a1 1 0 1 0-1.714-1.03L14 23.388l-6.294-6.294z"
                        fill-rule="nonzero"
                      ></path>
                    </svg> */}
                  </i>
                </span>{" "}
                Write Your First Promise
              </a>
            </li>
          </ol>
        </nav>

        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FN5Qi2GnyxM"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}
export default Video1;
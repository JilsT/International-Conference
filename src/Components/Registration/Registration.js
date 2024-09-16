import React from "react";
import './Registration.css';

const Registration = () => {
    return (
        <section id="registration">
            <div className="home-heading">
                Registration
            </div>
            <div className="home-content">
                Fee structure is as per given table.
                <br /><br />
                Please note that only one paper and one presenter is covered by an author registration. Authors with multiple papers need to register extra paper as per chart below. however, if single author is presenting his/her multiple papers some relaxation in registration fee will be given. for students rate it is not applicable. Also if more than one authors are coming for presentation then additional amount of attendee has to be credited. Normal paper is 6 pages and each extra page costs US$20/page and for India authors Rs. 500 per page
            </div>
            <div className="registration-table">
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Indian Author including GST</th>
                        <th>Others</th>
                    </tr>
                    <tr>
                        <td>Member IEEE</td>
                        <td>Rs. 5000</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Non Member</td>
                        <td>Rs. 6000</td>
                        <td>$250</td>
                    </tr>
                    <tr>
                        <td>Ph.D. Students</td>
                        <td>Rs. 4000</td>
                        <td>$150</td>
                    </tr><tr>
                        <td>Students UG/PG</td>
                        <td>Rs. 3500</td>
                        <td>$100</td>
                    </tr><tr>
                        <td>Institute Registration</td>
                        <td>Rs. 15000</td>
                        <td>$300 Two Persons</td>
                    </tr><tr>
                        <td>Attendance</td>
                        <td>Rs. 1500</td>
                        <td>$50</td>
                    </tr><tr>
                        <td>Attendance Students</td>
                        <td>Rs. 1000</td>
                        <td>$50</td>
                    </tr><tr>
                        <td>Extra Page &gt; 6</td>
                        <td>Rs. 500 per page</td>
                        <td>$10 per page</td>
                    </tr>
                </table>
            </div>
            <div className="payment-info">
                <div className="home-subheading">
                    Payment by NEFT / Cash/Wiretransfer
                </div>
                <div className="home-content">
                    Account No: 63025587900<br />
                    Account Name: IEEE MP Section<br />
                    Bank Name: State Bank of India<br />
                    Bank Address: IET DAVV, Khandwa Road, Indore 452017<br />
                    IFSC Code: SBIN0030470<br />
                    SWIFT: SBININBB267<br />
                </div>
            </div>
        </section>
    )
}

export default Registration;
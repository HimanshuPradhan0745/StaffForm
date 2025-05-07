import React, { useState } from 'react';
import './StaffProfile.css';

function StaffProfile() {
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        workplace: '',
        status: '',
        jobPosition: '',
        manager: '',
        role: '',
        academicLevel: '',
        hourlyRate: '',
        defaultLanguage: '',
        direction: '',
        emailSignature: '',
        otherInformation: '',
        whatsappNumber: '',
        password: '',
        domicile: '',
        maritalStatus: '',
        currentAddress: '',
        birthPlace: '',
        nation: '',
        citizenship: '',
        dateOfIssue: '',
        placeOfIssue: '',
        resident: '',
        bankAccountNumber: '',
        bankAccountName: '',
        bankName: '',
        ifscNumber: '',
        facebookLink: '',
        linkedinLink: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfileData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Profileczz Data:', profileData);
        // Here you would typically handle the submission of the form data
    };

    return (
        <div className="staff-profile-container">
            <h1>Staff Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="profile-section">
                    <h2 className="section-title">Profile Information</h2>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={profileData.firstName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={profileData.lastName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender" value={profileData.gender} onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" value={profileData.dateOfBirth} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={profileData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" value={profileData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="workplace">Workplace:</label>
                        <input type="text" id="workplace" name="workplace" value={profileData.workplace} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <div className="status-options">
                            <label>
                                <input type="radio" name="status" value="active" checked={profileData.status === 'active'} onChange={handleChange} /> Active
                            </label>
                            <label>
                                <input type="radio" name="status" value="inactive" checked={profileData.status === 'inactive'} onChange={handleChange} /> Inactive
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobPosition">Job Position:</label>
                        <input type="text" id="jobPosition" name="jobPosition" value={profileData.jobPosition} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="manager">Manager:</label>
                        <input type="text" id="manager" name="manager" value={profileData.manager} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role:</label>
                        <input type="text" id="role" name="role" value={profileData.role} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="academicLevel">Academic Level:</label>
                        <input type="text" id="academicLevel" name="academicLevel" value={profileData.academicLevel} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hourlyRate">Hourly Rate:</label>
                        <input type="number" id="hourlyRate" name="hourlyRate" value={profileData.hourlyRate} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="defaultLanguage">Default Language:</label>
                        <input type="text" id="defaultLanguage" name="defaultLanguage" value={profileData.defaultLanguage} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="direction">Direction:</label>
                        <input type="text" id="direction" name="direction" value={profileData.direction} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailSignature">Email Signature:</label>
                        <textarea id="emailSignature" name="emailSignature" value={profileData.emailSignature} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="otherInformation">Other Information:</label>
                        <textarea id="otherInformation" name="otherInformation" value={profileData.otherInformation} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="whatsappNumber">WhatsApp Number:</label>
                        <input type="text" id="whatsappNumber" name="whatsappNumber" value={profileData.whatsappNumber} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={profileData.password} onChange={handleChange} />
                    </div>
                </div>

                <div className="related-info-section">
                    <h2 className="section-title">Related Information</h2>
                    <div className="form-group">
                        <label htmlFor="domicile">Domicile:</label>
                        <input type="text" id="domicile" name="domicile" value={profileData.domicile} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="maritalStatus">Marital Status:</label>
                        <select id="maritalStatus" name="maritalStatus" value={profileData.maritalStatus} onChange={handleChange}>
                            <option value="">Select Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="currentAddress">Current Address:</label>
                        <textarea id="currentAddress" name="currentAddress" value={profileData.currentAddress} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthPlace">Birth Place:</label>
                        <input type="text" id="birthPlace" name="birthPlace" value={profileData.birthPlace} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nation">Nation:</label>
                        <input type="text" id="nation" name="nation" value={profileData.nation} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="citizenship">Citizenship:</label>
                        <input type="text" id="citizenship" name="citizenship" value={profileData.citizenship} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfIssue">Date of Issue:</label>
                        <input type="date" id="dateOfIssue" name="dateOfIssue" value={profileData.dateOfIssue} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="placeOfIssue">Place of Issue:</label>
                        <input type="text" id="placeOfIssue" name="placeOfIssue" value={profileData.placeOfIssue} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resident">Resident:</label>
                        <input type="text" id="resident" name="resident" value={profileData.resident} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bankAccountNumber">Bank Account Number:</label>
                        <input type="text" id="bankAccountNumber" name="bankAccountNumber" value={profileData.bankAccountNumber} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bankAccountName">Bank Account Name:</label>
                        <input type="text" id="bankAccountName" name="bankAccountName" value={profileData.bankAccountName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bankName">Bank Name:</label>
                        <input type="text" id="bankName" name="bankName" value={profileData.bankName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ifscNumber">IFSC Number:</label>
                        <input type="text" id="ifscNumber" name="ifscNumber" value={profileData.ifscNumber} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facebookLink">Facebook Link:</label>
                        <input type="text" id="facebookLink" name="facebookLink" value={profileData.facebookLink} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedinLink">LinkedIn Link:</label>
                        <input type="text" id="linkedinLink" name="linkedinLink" value={profileData.linkedinLink} onChange={handleChange} />
                    </div>
                </div>

                <button type="submit">Save Profile</button>
            </form>
        </div>
    );
}

export default StaffProfile;
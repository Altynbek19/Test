import React from "react";
import spec1 from '../assets/spec1.svg'
import './specialists.css'

export default function Specailists() {
    return (
        <div className="specialists">
            <h1>СПЕЦИАЛЬНОСТИ</h1>
            <div className="spec-part1">
                <div className="specialist">
                    <div className="specialist-header">
                        <img src={spec1} alt="" />
                        <div className="specialist-title">Графический дизайн — </div>
                    </div>
                    <div className="specialist-content">
                    художественно-
                    проектная деятельность по созданию гармоничной и эффективной визуально-коммуникационной среды.
                    </div>
                </div>
                <div className="specialist">
                    <div className="specialist-header">
                        <img src={spec1} alt="" />
                        <div className="specialist-title">Графический дизайн — </div>
                    </div>
                    <div className="specialist-content">
                    художественно-
                    проектная деятельность по созданию гармоничной и эффективной визуально-коммуникационной среды.
                    </div>
                </div>
                <div className="specialist">
                    <div className="specialist-header">
                        <img src={spec1} alt="" />
                        <div className="specialist-title">Графический дизайн — </div>
                    </div>
                    <div className="specialist-content">
                    художественно-
                    проектная деятельность по созданию гармоничной и эффективной визуально-коммуникационной среды.
                    </div>
                </div>
            </div>
            <div className="spec-part2">
                <div className="specialist">
                    <div className="specialist-header">
                        <img src={spec1} alt="" />
                        <div className="specialist-title">Графический дизайн — </div>
                    </div>
                    <div className="specialist-content">
                    художественно-
                    проектная деятельность по созданию гармоничной и эффективной визуально-коммуникационной среды.
                    </div>
                </div>
                <div className="specialist">
                    <div className="specialist-header">
                        <img src={spec1} alt="" />
                        <div className="specialist-title">Графический дизайн — </div>
                    </div>
                    <div className="specialist-content">
                    художественно-
                    проектная деятельность по созданию гармоничной и эффективной визуально-коммуникационной среды.
                    </div>
                </div>
            </div>
        </div>
    )
}
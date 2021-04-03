import {Col, Row} from "antd";
import {info} from "./constants";
import React from "react";


export const SelectFeatures = () => {

    return(
        <Row>
            <Col sm={24} md={6} lg={8} >
                <h2>Характеристики профессий</h2>
                {Object.entries(info.feature_professions).map(
                    ([id_feature, description]) =>
                        <div>
                            <input name="feature_professions" type="checkbox"
                                   id={`id_feature_${id_feature}`}/>
                            <label htmlFor={`id_feature_${id_feature}`}>
                                <span>{id_feature}. </span>
                                {description}</label>
                        </div>
                )}
            </Col>
            <Col sm={24} md={6} lg={8} >
                <h2>Хобби</h2>
                {Object.entries(info.hobby).map(
                    ([id_feature, description]) =>
                        <div>
                            <input name="hobby" type="checkbox" id={`id_feature_${id_feature}`}/>
                            <label htmlFor={`id_feature_${id_feature}`}>
                                <span>{id_feature}. </span>
                                {description}</label>
                        </div>
                )}
            </Col>
            <Col sm={24} md={6} lg={8} >
                <h2>Личностное развитие </h2>
                {Object.entries(info.personal_development).map(
                    ([id_feature, description]) =>
                        <div>
                            <input name="personal_development" type="checkbox"
                                   id={`id_feature_${id_feature}`}/>
                            <label htmlFor={`id_feature_${id_feature}`}>
                                <span>{id_feature}. </span>
                                {description}</label>
                        </div>
                )}
            </Col>
        </Row>
    )
}

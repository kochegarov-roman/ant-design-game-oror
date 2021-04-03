import {Button, Timeline, Tag, Col, Input, Row} from "antd";
import {info, name_professions, result_professions} from "./constants";
import React, {useEffect, useState} from "react";
import {SearchOutlined} from "@ant-design/icons";

const findInFeatureProfessions = (id_features) => {

    const resultDict = Object.keys(name_professions).reduce(
        (acc, cur) => {
            acc[Number(cur)] = [];
            return acc;
        }, {});

    id_features.map(
        id_feature =>
            id_feature && Object.entries(result_professions).map(
            ([id_prof, threeArrFeature]) => {
                console.log(id_prof);
                if (threeArrFeature.flat().includes(id_feature)) {
                    resultDict[id_prof].push(id_feature);
                }
            }
            )
    )
    return resultDict;
}


export const EnterResult = () => {

    const [findProfessions, setProfessions] = useState(undefined);
    useEffect(() => {

    }, [findProfessions])

    const onSearch = (data) => {
        let result = data.trim().split(',').map(one => !['', ' '].includes(one) && Number(one))
        console.log(result, data.trim().split(','));
        setProfessions(findInFeatureProfessions(result))
    }

    const intersectionFeatures = (feature_professions, arr_f) => {
        return feature_professions.filter(one => arr_f.includes(Number(one)))
    }

    const {Search} = Input;

    return (
        <>
            <Row justify="center">
                <Col sm={24} md={6} lg={8}>
                    <h2>Введите характеристики через запятую</h2>
                    <Search
                        placeholder="введите значения"
                        allowClear
                        enterButton="Получить результат"
                        size="small"
                        onSearch={onSearch}
                    />
                </Col>
            </Row>
            <Row justify="center">
                <Col sm={24} md={6} lg={8}>
                    {findProfessions && Object.entries(findProfessions).sort((a, b) =>
                        a[1].length > b[1].length ? -1 : 1).map(
                        ([id_profession, arrFeature], ind) =>
                            arrFeature.length ?
                                <Col span={24} className={'proffi'}>
                                    <h3><Tag color="green" className={'number-proff'}>{ind+1}</Tag><span className='h0'>Профессия:</span> {name_professions[id_profession]}</h3>
                                    <p>Количество совпадений: <Tag color="magenta">{arrFeature.length}</Tag> </p>
                                    {intersectionFeatures(Object.keys(info.feature_professions), arrFeature).length ?
                                        <Timeline.Item color="red">
                                            <p>Из них Характеристики профессий:</p>
                                            {
                                                intersectionFeatures(Object.keys(info.feature_professions), arrFeature).map(
                                                    id_f =>
                                                        <p>{info.feature_professions[id_f]}</p>
                                                )}
                                        </Timeline.Item>
                                        : null
                                    }

                                    {intersectionFeatures(Object.keys(info.hobby), arrFeature).length ?
                                        <Timeline.Item color="green">
                                            <p>Из них Хобби, хозяйство: </p>
                                            {
                                                intersectionFeatures(Object.keys(info.hobby), arrFeature).map(
                                                    id_f =>
                                                        <p>{info.hobby[id_f]}</p>
                                                )}
                                        </Timeline.Item>
                                        : null
                                    }
                                    {intersectionFeatures(Object.keys(info.personal_development), arrFeature).length ?
                                        <Timeline.Item color="blue">
                                            <p>Из них Личностное развитие:</p>
                                            {
                                                intersectionFeatures(Object.keys(info.personal_development), arrFeature).map(
                                                    id_f =>
                                                        <p>{info.personal_development[id_f]}</p>
                                                )}
                                        </Timeline.Item>
                                        : null
                                    }

                                </Col>
                                : null
                    )}
                </Col>

            </Row>
        </>

    )
}

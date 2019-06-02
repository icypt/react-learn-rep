package com.icypt.api.common.controller;


import com.icypt.api.common.constants.ResultEnum;
import com.icypt.api.common.vo.ResultVo;

public class BaseController {

    //成功返回携带数据对象
    public ResultVo success(Object obj) {
        ResultVo resultVo = success();
        resultVo.setData(obj);
        return resultVo;
    }

    //成功返回只携带状态
    public ResultVo success() {
        ResultVo resultVo = new ResultVo();
        resultVo.setCode(ResultEnum.SUCCESS.getCode());
        resultVo.setMessage(ResultEnum.SUCCESS.getMessage());
        return resultVo;
    }
}

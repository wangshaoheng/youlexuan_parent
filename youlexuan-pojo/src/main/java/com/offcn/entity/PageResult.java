package com.offcn.entity;

import java.io.Serializable;
import java.util.List;

/*分页对象
* 总条数total
* 当前页的行列表 rows
* */

public class PageResult implements Serializable {

    private long total;//总条数
    private List rows;

    public PageResult(long total, List rows) {
        this.total = total;
        this.rows = rows;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List getRows() {
        return rows;
    }

    public void setRows(List rows) {
        this.rows = rows;
    }
}





























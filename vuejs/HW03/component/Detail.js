export default {
  template: `
    <div>
        <div class="text-align">
        <table class="table table-bordered table-condensed">
            <colgroup>
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            <col width="20%" />
            </colgroup>
            <thead class="tcolor">
            <th>사원 아이디</th>
            <th>사원명</th>
            <th>부서</th>
            <th>직책</th>
            <th>연봉</th>
            </thead>
            <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.deptName }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.salary }}</td>
            </tr>
        </table>
        <div class="text-left">
            <a href="./hrm_list.html" class="btn btn-primary text-left">사원목록</a>
        </div>
        </div>
    </div>
    `,
  created() {
    const params = new URL(document.location).searchParams;
    const id = params.get('id');
    const emps = JSON.parse(localStorage.getItem('member'));
    for (let obj of emps.items) {
      if (id == obj.id) {
        this.item = obj;
        break;
      }
    }
  },
};

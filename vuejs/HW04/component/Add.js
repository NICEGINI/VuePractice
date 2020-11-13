export default {
  template: `
    <div>
    <hr />
      <h1 class="text-center mb-3" style="color: rgb(68, 68, 255)">ADD EMPLOYEE</h1>
      <div class="text-align">
        <table class="table table-bordered table-condensed">
          <colgroup>
            <col width="8%" />
            <col width="30%" />
          </colgroup>
          <tr>
            <th>이름</th>
            <td><input type="text" class="form-control" id="name" ref="name" v-model="name" /></td>
          </tr>
          <tr>
            <th>이메일ID</th>
            <td>
              <input type="text" class="form-control" id="email" ref="email" v-model="email" />
            </td>
          </tr>
          <tr>
            <th>고용일</th>
            <td>
              <input
                type="date"
                class="form-control"
                id="hiredate"
                ref="hiredate"
                v-model="hiredate"
              />
            </td>
          </tr>
          <tr>
            <th>선임관리자</th>
            <td>
            <input type="text" class="form-control" id="admin" ref="admin" v-model="admin" />
            </td>
          </tr>
          <tr>
            <th>직책</th>
            <td>
              <select v-model="title">
                <option value="">직책선택</option>
                <option value="사장">사장</option>
                <option value="기획부장">기획부장</option>
                <option value="영업부장">영업부장</option>
                <option value="총무부장">총무부장</option>
                <option value="인사부장">인사부장</option>
                <option value="과장">과장</option>
                <option value="영업대표이사">영업대표이사</option>
                <option value="사원">사원</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>부서</th>
            <td>
            <select v-model="deptName">
                <option value="0">부서선택</option>
                <option value="110">기획부</option>
                <option value="102">영업부</option>
                <option value="118">인사부</option>
                <option value="101">총무부</option>
                <option value="120">회계부</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>월급</th>
            <td>
              <input type="text" class="form-control" id="salary" ref="salary" v-model="salary" />
            </td>
          </tr>
          <tr>
            <th>커미션</th>
            <td>
              <input
                type="text"
                class="form-control"
                id="commission"
                ref="commission"
                v-model="commission"
              />
            </td>
          </tr>
        </table>
        <div class="text-center">
          <a class="btn btn-primary text-left" @click="moveList">사원목록</a>
          <button class="btn btn-primary text-left" @click="checkHandler">사원등록</button>
        </div>
      </div>
    </div>
    `,
  data: function () {
    return {
      name: '',
      email: '',
      hiredate: '',
      admin: 0,
      title: '',
      deptName: 0,
      salary: 0,
      commission: 0,
    };
  },
  methods: {
    // 입력값 체크하기 - 체크성공하면 createHandler호출
    checkHandler() {
      // 사용자의 입력값 체크
      // 작성자, 제목, 내용
      // 없을 경우 각 항목에 맞는 메시지 출력
      let err = true;
      let msg = '';
      !this.name && ((msg = '이름을 입력하세요!'), (err = false), this.$refs.name.focus());
      err &&
        !this.email &&
        ((msg = '이메일을 입력하세요!'), (err = false), this.$refs.email.focus());

      err && !this.hiredate && ((msg = '고용일을 입력하세요!'), (err = false));

      err && !this.admin && ((msg = '관리자여부를 확인하세요!'), (err = false));

      err && !this.title && ((msg = '직책을 확인하세요!'), (err = false));

      err &&
        !this.deptName &&
        ((msg = '부서명을 입력하세요!'), (err = false), this.$refs.deptName.focus());

      err &&
        !this.salary &&
        ((msg = '연봉을 입력하세요!'), (err = false), this.$refs.salary.focus());

      err &&
        !this.commission &&
        ((msg = '커미션을 입력하세요!'), (err = false), this.$refs.commission.focus());

      if (!err) alert(msg);
      // 막약 내용이 다 입력되어 있다면 createHandler호출
      else this.createHandler();
    },
    createHandler() {
      axios.post('http://localhost:8097/hrmboot/api/employee', {
        name: this.name,
        mailid: this.email,
        start_date: this.hiredate,
        manager_id: this.admin,
        title: this.title,
        dept_id: this.deptName,
        salary: this.salary,
        commission_pct: this.commission,
      });
      //등록 성공 메시지 출력
      alert('추가 되었습니다!');

      // 목록페이지 이동
      this.$router.push('/list');
    },
    moveList() {
      this.$router.push('/list');
    },
  },
};

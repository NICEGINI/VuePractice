export default {
  template: `
    <div>
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
            <th>이메일</th>
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
            <th>관리자</th>
            <td>
              <select v-model="admin">
                <option value="null">관리자여부</option>
                <option value="true">Y</option>
                <option value="false">N</option>
              </select>
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
              <input
                type="text"
                class="form-control"
                id="deptName"
                ref="deptName"
                v-model="deptName"
              />
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
      id: 0,
      name: '',
      email: '',
      hiredate: '',
      admin: null,
      title: '',
      deptName: '',
      salary: 0,
      commission: '',
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
      // 로컬 스토리지에 저장된 데이터 가져오기
      const member = localStorage.getItem('member');
      // 데이터 선언
      let newMember = {
        sequence: 0,
        items: [],
      };
      // 기존 로컬 스토리지에 저장된 내용이 있다면 newMember 객체 변경
      if (member) {
        newMember = JSON.parse(member);
      }

      // 멤버 사원 번호 증가
      newMember.sequence += 1;
      // 화면 입력된 데이터를 newMember에 추가
      newMember.items.push({
        id: newMember.sequence,
        name: this.name,
        email: this.email,
        hiredate: this.hiredate,
        admin: this.admin,
        title: this.title,
        deptName: this.deptName,
        salary: this.salary,
        commission: this.commission,
      });

      // 로컬 스토리지 저장
      localStorage.setItem('member', JSON.stringify(newMember));
      //등록 성공 메시지 출력
      alert('추가 되었습니다!');

      // 목록페이지 이동
      location.href = './hrm_list.html';
    },
    moveList() {
      location.href = './hrm_list.html';
    },
  },
};

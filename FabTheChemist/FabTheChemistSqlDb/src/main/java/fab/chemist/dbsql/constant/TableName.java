package fab.chemist.dbsql.constant;

public enum TableName {

	NOT_ACT_DELAYS("NOT_ACT_DELAYS"), 
	NOT_ORGANISATIONAL_ENTITIES("NOT_ORGANISATIONAL_ENTITIES"), 
	NOT_SPECIFIC_USER_ROLES("NOT_SPECIFIC_USER_ROLES"), 
	NOT_GRADES("NOT_GRADES"), 
	NOT_CAREER_DEVELOPMENT_PLAN("NOT_CAREER_DEVELOPMENT_PLAN"), 
	NOT_ROLES("NOT_ROLES"), 
	NOT_ROLES_TL("NOT_ROLES_TL"), 
	NOT_REP_ATTACHMENTS("NOT_REP_ATTACHMENTS"), 
	NOT_JOBS_TL("NOT_JOBS_TL"), 
	NOT_JOBS("NOT_JOBS"), 
	NOT_FUNCTION_GROUP("NOT_FUNCTION_GROUP"), 
	NOT_REVIEW_PERIODS("NOT_REVIEW_PERIODS"), 
	NOT_PERSONAL_MEMBERS("NOT_PERSONAL_MEMBERS"), 
	NOT_ORG_REVIEW_PERIODS("NOT_ORG_REVIEW_PERIODS") 
	;
	
	private final String value;

	private TableName(String value) {
		this.value = value;
	}

	public String getValue() {
		return this.value;
	}
}
